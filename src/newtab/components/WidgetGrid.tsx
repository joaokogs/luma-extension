import { useRef, useState, useMemo } from 'preact/hooks';
import type { Widget } from '@shared/types';
import { WidgetCard } from './WidgetCard';
import { LinksWidgetView } from './LinksWidget';
import { CalendarWidgetView } from './CalendarWidget';
import { PomodoroWidgetView } from './PomodoroWidget';
import { ClockWidgetView } from './ClockWidget';
import { WeatherWidgetView } from './WeatherWidget';
import { FocusWidgetView } from './FocusWidget';
import { useColumnCount } from '../hooks/useColumnCount';

interface WidgetGridProps {
  widgets: Widget[];
  onReorder: (widgets: Widget[]) => void;
  onEditWidget: (widget: Widget) => void;
  onDeleteWidget: (widgetId: string) => void;
  onDeleteLink: (widgetId: string, linkId: string) => void;
  onEditLink?: (widgetId: string, linkId: string) => void;
  onAddLink?: (widget: Widget) => void;
  onResizeWidget?: (widgetId: string, height: number) => void;
  isEditing?: boolean;
}

interface DragTarget {
  widgetId: string | null;
  col: number | null;
  position: 'before' | 'after' | 'into' | null;
}

export function WidgetGrid({
  widgets,
  onReorder,
  onEditWidget,
  onDeleteWidget,
  onDeleteLink,
  onEditLink,
  onAddLink,
  onResizeWidget,
  isEditing = true
}: WidgetGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const columnCount = useColumnCount(gridRef);
  const [drag, setDrag] = useState<DragTarget>({ widgetId: null, col: null, position: null });

  const columns = useMemo(() => {
    const cols: Widget[][] = Array.from({ length: columnCount }, () => []);
    for (const w of widgets) {
      const col = Math.min(Math.max(w.col ?? 0, 0), columnCount - 1);
      cols[col].push(w);
    }
    for (const col of cols) {
      col.sort((a, b) => a.order - b.order);
    }
    return cols;
  }, [widgets, columnCount]);

  const handleDragStart = (e: DragEvent, id: string) => {
    setDrag({ widgetId: id, col: null, position: null });
    e.dataTransfer?.setData('text/plain', id);
    e.dataTransfer?.setDragImage(new Image(), 0, 0);
  };

  const handleDragOverWidget = (e: DragEvent, widget: Widget) => {
    e.preventDefault();
    e.stopPropagation();
    if (!drag.widgetId || drag.widgetId === widget.id) {
      setDrag((prev) => ({ ...prev, col: null, position: null }));
      return;
    }
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const position = e.clientY < midY ? 'before' : 'after';
    const col = Math.min(Math.max(widget.col ?? 0, 0), columnCount - 1);
    setDrag({ widgetId: drag.widgetId, col, position });
  };

  const handleDragOverColumn = (e: DragEvent, colIndex: number) => {
    e.preventDefault();
    if (!drag.widgetId) return;
    setDrag({ widgetId: drag.widgetId, col: colIndex, position: 'into' });
  };

  const commitReorder = (fn: (byCol: Widget[][]) => void) => {
    const byCol: Widget[][] = Array.from({ length: columnCount }, () => []);
    const copy = widgets.map((w) => ({ ...w }));
    for (const w of copy) {
      const c = Math.min(Math.max(w.col ?? 0, 0), columnCount - 1);
      byCol[c].push(w);
    }
    fn(byCol);
    for (const col of byCol) {
      col.sort((a, b) => a.order - b.order);
      col.forEach((w, i) => { w.order = i; });
    }
    const result = byCol.flat();
    onReorder(result);
  };

  const handleDropOnWidget = (e: DragEvent, targetWidget: Widget) => {
    e.preventDefault();
    e.stopPropagation();
    if (!drag.widgetId || drag.widgetId === targetWidget.id) {
      setDrag({ widgetId: null, col: null, position: null });
      return;
    }

    const targetCol = Math.min(Math.max(targetWidget.col ?? 0, 0), columnCount - 1);
    const colWidgets = columns[targetCol];
    const targetIndex = colWidgets.findIndex((w) => w.id === targetWidget.id);
    let insertIndex = drag.position === 'after' ? targetIndex + 1 : targetIndex;

    commitReorder((byCol) => {
      const moved = byCol.flat().find((w) => w.id === drag.widgetId);
      if (!moved) return;
      // remove from source column
      for (const col of byCol) {
        const idx = col.findIndex((w) => w.id === drag.widgetId);
        if (idx !== -1) { col.splice(idx, 1); break; }
      }
      moved.col = targetCol;
      // clamp insertIndex
      if (insertIndex > byCol[targetCol].length) insertIndex = byCol[targetCol].length;
      byCol[targetCol].splice(insertIndex, 0, moved);
    });

    setDrag({ widgetId: null, col: null, position: null });
  };

  const handleDropOnColumn = (e: DragEvent, colIndex: number) => {
    e.preventDefault();
    if (!drag.widgetId) {
      setDrag({ widgetId: null, col: null, position: null });
      return;
    }

    commitReorder((byCol) => {
      let moved: Widget | undefined;
      for (const col of byCol) {
        const idx = col.findIndex((w) => w.id === drag.widgetId);
        if (idx !== -1) { moved = col.splice(idx, 1)[0]; break; }
      }
      if (!moved) return;
      moved.col = colIndex;
      byCol[colIndex].push(moved);
    });

    setDrag({ widgetId: null, col: null, position: null });
  };

  const handleDragEnd = () => {
    setDrag({ widgetId: null, col: null, position: null });
  };

  if (widgets.length === 0) {
    return (
      <div className="widgets-grid" ref={gridRef}>
        <div className="empty-state">
          <h3 className="empty-state__title">Nenhum widget</h3>
          <p className="empty-state__description">Adicione seu primeiro widget para começar a montar o layout.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="widgets-grid" ref={gridRef}>
      {columns.map((colWidgets, colIndex) => (
        <div
          key={colIndex}
          className="widgets-column"
          onDragOver={(e) => isEditing && handleDragOverColumn(e, colIndex)}
          onDrop={(e) => isEditing && handleDropOnColumn(e, colIndex)}
        >
          {colWidgets.length === 0 && drag.col === colIndex && drag.position === 'into' && <DropIndicator />}
          {colWidgets.map((widget) => {
            const isTarget = drag.widgetId && drag.widgetId !== widget.id && drag.col === (widget.col ?? 0);
            return (
              <div key={widget.id} className="widget-drop-wrapper">
                {isTarget && drag.position === 'before' && <DropIndicator />}
                <WidgetCard
                  widget={widget}
                  isDragging={widget.id === drag.widgetId}
                  onDragStart={isEditing ? (e) => handleDragStart(e, widget.id) : undefined}
                  onDragOver={isEditing ? (e) => handleDragOverWidget(e, widget) : undefined}
                  onDrop={isEditing ? (e) => handleDropOnWidget(e, widget) : undefined}
                  onDragEnd={handleDragEnd}
                  onEdit={isEditing ? () => onEditWidget(widget) : undefined}
                  onDelete={isEditing ? () => onDeleteWidget(widget.id) : undefined}
                  onAddLink={isEditing && widget.type === 'links' && onAddLink ? () => onAddLink(widget) : undefined}
                  onResize={onResizeWidget ? (h) => onResizeWidget(widget.id, h) : undefined}
                >
                  <WidgetContent
                    widget={widget}
                    onDeleteLink={(linkId) => onDeleteLink(widget.id, linkId)}
                    onEditLink={onEditLink ? (linkId) => onEditLink(widget.id, linkId) : undefined}
                  />
                </WidgetCard>
                {isTarget && drag.position === 'after' && <DropIndicator />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function DropIndicator() {
  return <div className="drop-indicator" />;
}

function WidgetContent({ widget, onDeleteLink, onEditLink }: { widget: Widget; onDeleteLink?: (linkId: string) => void; onEditLink?: (linkId: string) => void }) {
  switch (widget.type) {
    case 'links':
      return <LinksWidgetView widget={widget} onDeleteLink={onDeleteLink} onEditLink={onEditLink} />;
    case 'calendar':
      return <CalendarWidgetView />;
    case 'pomodoro':
      return <PomodoroWidgetView />;
    case 'clock':
      return <ClockWidgetView timezone={widget.timezone} label={widget.label} />;
    case 'weather':
      return <WeatherWidgetView city={widget.city} />;
    case 'focus':
      return <FocusWidgetView targetMinutes={widget.targetMinutes} />;
    default:
      return null;
  }
}
