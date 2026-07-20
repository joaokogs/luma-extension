import { useEffect, useRef, useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import type { Widget } from '@shared/types';
import { Icon } from './Icon';

interface WidgetCardProps {
  widget: Widget;
  children: preact.ComponentChildren;
  onEdit?: () => void;
  onDelete?: () => void;
  onAddLink?: () => void;
  onResize?: (height: number) => void;
  onDragStart?: (e: DragEvent) => void;
  onDragOver?: (e: DragEvent) => void;
  onDrop?: (e: DragEvent) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  className?: string;
}

export function WidgetCard({
  widget,
  children,
  onEdit,
  onDelete,
  onAddLink,
  onResize,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging,
  className = ''
}: WidgetCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const kebabRef = useRef<HTMLButtonElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const resizeStart = useRef({ y: 0, height: 0 });

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        kebabRef.current &&
        !kebabRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  useEffect(() => {
    if (!isResizing) return;

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const diff = e.clientY - resizeStart.current.y;
      const newHeight = Math.max(120, resizeStart.current.height + diff);
      onResize?.(newHeight);
    };

    const onMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isResizing]);

  const openMenu = () => {
    if (kebabRef.current) {
      const rect = kebabRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
    }
    setMenuOpen(true);
  };

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cardRef.current) {
      resizeStart.current = {
        y: e.clientY,
        height: cardRef.current.getBoundingClientRect().height
      };
    }
    setIsResizing(true);
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    openMenu();
  };

  const handleKebabClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      openMenu();
    }
  };

  const handleAction = (fn?: () => void) => (e: MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    fn?.();
  };

  return (
    <div
      ref={cardRef}
      className={`widget-card ${widget.colSpan > 1 ? 'widget-card--wide' : ''} ${isDragging ? 'widget-card--dragging' : ''} ${widget.height ? 'widget-card--fixed-height' : ''} ${isResizing ? 'widget-card--resizing' : ''} ${className}`}
      draggable={!!onDragStart && !isResizing}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      onContextMenu={handleContextMenu}
      data-widget-id={widget.id}
      data-col-span={widget.colSpan}
      style={widget.height ? { height: widget.height, flexShrink: 0 } : undefined}
    >
      <div className="widget-card__header">
        <div className="widget-card__title-row">
          <h3 className="widget-card__title">{widget.title}</h3>
        </div>
        {(onEdit || onDelete || onAddLink) && (
          <div className="widget-card__actions">
            <button
              ref={kebabRef}
              className="widget-card__kebab"
              onClick={handleKebabClick}
              aria-label="Ações do widget"
              title="Ações"
            >
              <Icon name="more-vertical" size={16} />
            </button>
            {menuOpen && createPortal(
              <div
                ref={menuRef}
                className="widget-card__menu"
                style={{ position: 'fixed', top: menuPos.top, right: menuPos.right }}
              >
                {onAddLink && (
                  <button
                    className="widget-card__menu-item"
                    onClick={handleAction(onAddLink)}
                  >
                    <Icon name="plus" size={14} />
                    Adicionar link
                  </button>
                )}
                {onEdit && (
                  <button
                    className="widget-card__menu-item"
                    onClick={handleAction(onEdit)}
                  >
                    <Icon name="edit" size={14} />
                    Editar
                  </button>
                )}
                {onDelete && (
                  <button
                    className="widget-card__menu-item widget-card__menu-item--danger"
                    onClick={handleAction(onDelete)}
                  >
                    <Icon name="trash" size={14} />
                    Excluir
                  </button>
                )}
              </div>,
              document.body
            )}
          </div>
        )}
      </div>
      <div className="widget-card__content">{children}</div>
      {onResize && (
        <div
          className="widget-card__resize-handle"
          onMouseDown={handleMouseDown}
          aria-label="Redimensionar widget"
          title="Arraste para redimensionar"
        />
      )}
    </div>
  );
}
