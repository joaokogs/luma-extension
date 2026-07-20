import { useEffect, useMemo, useState } from 'preact/hooks';
import type { AppData, Widget, WidgetType, TopWidgetConfig } from '@shared/types';
import {
  loadData,
  saveData,
  createBoard,
  addBoard,
  renameBoard,
  deleteBoard,
  addWidget,
  deleteWidget,
  updateWidget,
  addLink,
  createLink,
  deleteLink,
  updateLink,
  updateSettings,
  getBoardById,
  getInitialBoardId,
  getWidgetsForBoard,
  exportData,
  importData,
  createWidget
} from '@shared/storage';
import { BoardTabs } from './components/BoardTabs';
import { WidgetGrid } from './components/WidgetGrid';
import { WidgetEditor } from './components/WidgetEditor';
import { LinkDialog } from './components/LinkDialog';
import { SettingsPanel } from './components/SettingsPanel';
import { TopInfoWidgets } from './components/TopInfoWidgets';
import { WidgetToolbar } from './components/WidgetToolbar';
import { ConfirmDialog } from './components/ConfirmDialog';
import { NewTabDialog } from './components/NewTabDialog';
import { Icon } from './components/Icon';
import './styles.css';

function looksLikeUrl(str: string): boolean {
  return /^https?:\/\//i.test(str) || /^[a-z0-9][-a-z0-9]*\.[a-z]{2,}(\/|$)/i.test(str);
}

function ensureProtocol(str: string): string {
  if (/^https?:\/\//i.test(str)) return str;
  return `https://${str}`;
}

interface ConfirmState {
  title: string;
  message: string;
  danger?: boolean;
  confirmLabel?: string;
  onConfirm: () => void;
}

export function App() {
  const [data, setData] = useState<AppData | null>(null);
  const [activeBoardId, setActiveBoardId] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showWidgetToolbar, setShowWidgetToolbar] = useState(false);
  const [isAddingWidget, setIsAddingWidget] = useState(false);
  const [editingWidget, setEditingWidget] = useState<Widget | null>(null);
  const [addingLinkWidget, setAddingLinkWidget] = useState<Widget | null>(null);
  const [editingLink, setEditingLink] = useState<{ widgetId: string; linkId: string } | null>(null);
  const [confirmState, setConfirmState] = useState<ConfirmState | null>(null);
  const [showNewTabDialog, setShowNewTabDialog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    loadData().then((loaded) => {
      if (!mounted) return;
      setData(loaded);
      setActiveBoardId(getInitialBoardId(loaded));
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (data) saveData(data);
  }, [data]);

  useEffect(() => {
    if (data && activeBoardId && data.settings.lastBoardId !== activeBoardId) {
      setData((prev) => (prev ? updateSettings(prev, { lastBoardId: activeBoardId }) : prev));
    }
  }, [activeBoardId]);

  useEffect(() => {
    const theme = data?.settings.theme ?? 'system';
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && systemDark);
    root.classList.toggle('theme-dark', isDark);
    root.classList.toggle('theme-light', !isDark);
  }, [data?.settings.theme]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const bar = document.querySelector('.app-fab-bar');
      if (bar && !bar.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const activeBoard = useMemo(
    () => (data && activeBoardId ? getBoardById(data, activeBoardId) : undefined),
    [data, activeBoardId]
  );

  const widgets = useMemo(
    () => (data && activeBoardId ? getWidgetsForBoard(data, activeBoardId) : []),
    [data, activeBoardId]
  );

  if (!data || !activeBoard) {
    return <div className="app-loading" aria-label="Carregando Boards" />;
  }

  const handleAddBoard = () => {
    setShowNewTabDialog(true);
  };

  const handleCreateBoard = (title: string) => {
    const board = createBoard(title);
    setData((prev) => (prev ? addBoard(prev, board) : prev));
    setActiveBoardId(board.id);
    setShowNewTabDialog(false);
  };

  const handleRenameBoard = (id: string, title: string) => {
    setData((prev) => (prev ? renameBoard(prev, id, title) : prev));
  };

  const handleDeleteBoard = (id: string, boardTitle: string) => {
    setConfirmState({
      title: 'Excluir aba',
      message: `Tem certeza que deseja excluir a aba "${boardTitle}"? Todos os widgets e links serão perdidos.`,
      danger: true,
      confirmLabel: 'Excluir',
      onConfirm: () => {
        setData((prev) => {
          if (!prev) return prev;
          const next = deleteBoard(prev, id);
          setActiveBoardId(getInitialBoardId(next));
          return next;
        });
        setConfirmState(null);
      }
    });
  };

  const handleAddWidget = (widget: Widget) => {
    if (!activeBoardId) return;
    setData((prev) => (prev && activeBoardId ? addWidget(prev, activeBoardId, widget) : prev));
    setIsAddingWidget(false);
  };

  const handleUpdateWidget = (widget: Widget) => {
    if (!activeBoardId) return;
    setData((prev) =>
      prev && activeBoardId
        ? updateWidget(prev, activeBoardId, widget.id, widget as Partial<Widget>)
        : prev
    );
    setEditingWidget(null);
  };

  const handleDeleteWidget = (widgetId: string) => {
    setConfirmState({
      title: 'Excluir widget',
      message: 'Tem certeza que deseja excluir este widget?',
      danger: true,
      confirmLabel: 'Excluir',
      onConfirm: () => {
        if (activeBoardId) {
          setData((prev) => (prev && activeBoardId ? deleteWidget(prev, activeBoardId, widgetId) : prev));
        }
        setConfirmState(null);
      }
    });
  };

  const handleReorder = (nextWidgets: Widget[]) => {
    if (!activeBoardId) return;
    setData((prev) => {
      if (!prev || !activeBoardId) return prev;
      const board = prev.boards.find((b) => b.id === activeBoardId);
      if (!board) return prev;
      return {
        ...prev,
        boards: prev.boards.map((b) =>
          b.id === activeBoardId ? { ...b, widgets: nextWidgets, updatedAt: Date.now() } : b
        )
      };
    });
  };

  const handleResizeWidget = (widgetId: string, height: number) => {
    if (!activeBoardId) return;
    setData((prev) =>
      prev && activeBoardId
        ? updateWidget(prev, activeBoardId, widgetId, { height })
        : prev
    );
  };

  const handleDeleteLink = (widgetId: string, linkId: string) => {
    if (!activeBoardId) return;
    setData((prev) => (prev && activeBoardId ? deleteLink(prev, activeBoardId, widgetId, linkId) : prev));
  };

  const handleAddLink = (widgetId: string, title: string, url: string, icon?: string) => {
    if (!activeBoardId) return;
    const link = createLink(title, url, icon);
    setData((prev) => (prev && activeBoardId ? addLink(prev, activeBoardId, widgetId, link) : prev));
    setAddingLinkWidget(null);
  };

  const handleEditLink = (widgetId: string, linkId: string) => {
    setEditingLink({ widgetId, linkId });
  };

  const handleUpdateLink = (widgetId: string, linkId: string, title: string, url: string, icon?: string) => {
    if (!activeBoardId) return;
    setData((prev) =>
      prev && activeBoardId
        ? updateLink(prev, activeBoardId, widgetId, linkId, {
            title: title.trim() || 'Link sem título',
            url,
            icon: icon || undefined
          })
        : prev
    );
    setEditingLink(null);
  };

  const editingLinkData = useMemo(() => {
    if (!editingLink || !data || !activeBoardId) return null;
    const widget = data.boards
      .find((b) => b.id === activeBoardId)
      ?.widgets.find((w) => w.id === editingLink.widgetId);
    if (!widget || widget.type !== 'links') return null;
    const link = widget.items.find((l) => l.id === editingLink.linkId);
    if (!link) return null;
    return { widgetTitle: widget.title, widgetId: editingLink.widgetId, link };
  }, [editingLink, data, activeBoardId]);

  const handleSettingsChange = (settings: Partial<AppData['settings']>) => {
    setData((prev) => (prev ? updateSettings(prev, settings) : prev));
  };

  const handleToggleWidget = (type: WidgetType) => {
    const currentTopWidgets = data?.settings.topWidgets || [];
    const exists = currentTopWidgets.find((w) => w.type === type);
    
    if (exists) {
      // Remove widget
      const next = currentTopWidgets.filter((w) => w.type !== type);
      handleSettingsChange({ topWidgets: next });
    } else {
      // Add widget with defaults
      const newWidget: TopWidgetConfig = { type: type as any };
      if (type === 'weather') newWidget.city = 'New York';
      if (type === 'focus') newWidget.targetMinutes = 240;
      handleSettingsChange({ topWidgets: [...currentTopWidgets, newWidget] });
    }
  };

  const handleAddWidgetFromToolbar = (type: WidgetType) => {
    if (!activeBoardId) return;
    const widget = createWidget(type, type);
    setData((prev) => (prev && activeBoardId ? addWidget(prev, activeBoardId, widget) : prev));
  };

  const handleToolbarCityChange = (city: string) => {
    const currentTopWidgets = data?.settings.topWidgets || [];
    const next = currentTopWidgets.map((w) => 
      w.type === 'weather' ? { ...w, city } : w
    );
    handleSettingsChange({ topWidgets: next });
  };

  const handleExport = () => {
    if (data) exportData(data);
  };

  const handleImport = async (file: File) => {
    try {
      const imported = await importData(file);
      setData(imported);
      saveData(imported);
      setActiveBoardId(getInitialBoardId(imported));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao importar');
    }
  };

  const displayedWidgets = useMemo(() => {
    if (!searchQuery.trim()) return widgets;

    const q = searchQuery.toLowerCase();
    return widgets
      .filter((w) => w.type === 'links')
      .map((w) => {
        const matched = w.items.filter(
          (i) => i.title.toLowerCase().includes(q) || i.url.toLowerCase().includes(q)
        );
        return matched.length > 0 ? { ...w, items: matched } as Widget : null;
      })
      .filter((w): w is Widget => w !== null);
  }, [widgets, searchQuery]);

  const hasNoResults = searchQuery.trim() && displayedWidgets.length === 0;

  return (
    <div
      className="app"
      style={{
        background:
          data.settings.wallpaper.type === 'url'
            ? `url(${data.settings.wallpaper.value}) center/cover no-repeat fixed`
            : data.settings.wallpaper.value
      }}
    >
      <header className="app-header">
        <BoardTabs
          boards={data.boards}
          activeId={activeBoardId}
          onSelect={setActiveBoardId}
          onAdd={handleAddBoard}
          onRename={handleRenameBoard}
          onDelete={(id, title) => handleDeleteBoard(id, title)}
        />

        {data.settings.topWidgets?.some((w) => w.type === 'search') && (
          <div className="app-header__search">
            <Icon name="search" size={18} />
            <input
              type="text"
              placeholder="Pesquisar ou digitar URL..."
              value={searchQuery}
              onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  const q = searchQuery.trim();
                  const url = looksLikeUrl(q) ? ensureProtocol(q) : `https://www.google.com/search?q=${encodeURIComponent(q)}`;
                  window.open(url, '_blank');
                }
              }}
              aria-label="Pesquisar ou digitar URL"
            />
            {searchQuery && (
              <button
                className="app-header__clear"
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
        )}

        <TopInfoWidgets
          configs={data.settings.topWidgets?.filter((w) => w.type !== 'search') || []}
        />

      </header>

      <div className="app-fab-bar">
        <button
          className={`app-fab-bar__btn app-fab-bar__btn--menu ${menuOpen ? 'app-fab-bar__btn--active' : ''}`}
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          title={menuOpen ? 'Fechar menu' : 'Menu'}
        >
          <Icon name="menu" size={22} />
        </button>

        <div className={`app-fab-menu ${menuOpen ? 'app-fab-menu--open' : ''}`}>
          <button
            className="app-fab-menu__item"
            onClick={() => { setShowWidgetToolbar(true); setMenuOpen(false); }}
            aria-label="Adicionar widget"
            title="Adicionar widget"
          >
            <Icon name="plus" size={18} />
            <span>Adicionar widget</span>
          </button>
          <button
            className="app-fab-menu__item"
            onClick={() => { setShowSettings(true); setMenuOpen(false); }}
            aria-label="Configurações"
            title="Configurações"
          >
            <Icon name="settings" size={18} />
            <span>Configurações</span>
          </button>
        </div>
      </div>

      <main className="app-content">
        {hasNoResults ? (
          <div className="empty-state">
            <h3 className="empty-state__title">Nenhum resultado</h3>
            <p className="empty-state__description">Nenhum link corresponde à sua busca.</p>
            <button className="empty-state__action" onClick={() => setSearchQuery('')}>
              Limpar busca
            </button>
          </div>
        ) : (
          <WidgetGrid
            widgets={displayedWidgets}
            onReorder={handleReorder}
            onEditWidget={setEditingWidget}
            onDeleteWidget={handleDeleteWidget}
            onDeleteLink={handleDeleteLink}
            onEditLink={handleEditLink}
            onAddLink={setAddingLinkWidget}
            onResizeWidget={handleResizeWidget}
            isEditing={!searchQuery.trim()}
          />
        )}
      </main>

      {isAddingWidget && (
        <WidgetEditor
          onSave={handleAddWidget}
          onClose={() => setIsAddingWidget(false)}
        />
      )}

      {editingWidget && (
        <WidgetEditor
          widget={editingWidget}
          onSave={handleUpdateWidget}
          onClose={() => setEditingWidget(null)}
        />
      )}

      {addingLinkWidget && (
        <LinkDialog
          widgetTitle={addingLinkWidget.title}
          onSave={(title, url, icon) => handleAddLink(addingLinkWidget.id, title, url, icon)}
          onClose={() => setAddingLinkWidget(null)}
        />
      )}

      {editingLinkData && (
        <LinkDialog
          widgetTitle={editingLinkData.widgetTitle}
          link={editingLinkData.link}
          onSave={(title, url, icon) => handleUpdateLink(editingLinkData.widgetId, editingLinkData.link.id, title, url, icon)}
          onClose={() => setEditingLink(null)}
        />
      )}

      {showSettings && (
        <SettingsPanel
          settings={data.settings}
          onChange={handleSettingsChange}
          onClose={() => setShowSettings(false)}
          onExport={handleExport}
          onImport={handleImport}
        />
      )}

      {showWidgetToolbar && (
        <WidgetToolbar
          topWidgets={data.settings.topWidgets || []}
          boardWidgets={widgets.map((w) => w.type)}
          onToggleWidget={handleToggleWidget}
          onAddWidget={handleAddWidgetFromToolbar}
          onCityChange={handleToolbarCityChange}
          onClose={() => setShowWidgetToolbar(false)}
        />
      )}

      <NewTabDialog
        open={showNewTabDialog}
        onSave={handleCreateBoard}
        onClose={() => setShowNewTabDialog(false)}
      />

      <ConfirmDialog
        open={!!confirmState}
        title={confirmState?.title || ''}
        message={confirmState?.message || ''}
        danger={confirmState?.danger}
        confirmLabel={confirmState?.confirmLabel}
        onConfirm={confirmState?.onConfirm || (() => {})}
        onCancel={() => setConfirmState(null)}
      />
    </div>
  );
}
