import { useEffect, useState, useMemo } from 'preact/hooks';
import type { AppData, LinksWidget, LinkItem } from '@shared/types';
import {
  loadData,
  saveData,
  createLink,
  addLink,
  createWidget,
  addWidget,
  getInitialBoardId,
  getWidgetsForBoard,
  updateLink,
  deleteLink,
  updateWidget,
  deleteWidget,
  getFaviconUrl
} from '@shared/storage';
import { queryActiveTab } from '@shared/browser';
import { Menu, Settings, Plus, ExternalLink, Pencil, Trash2 } from 'lucide-preact';
import { LinkDialog } from './LinkDialog';
import { WidgetDialog } from './WidgetDialog';

type DialogMode = 'add-link' | { edit: string } | 'widget';

export function Popup() {
  const [data, setData] = useState<AppData | null>(null);
  const [activeBoardId, setActiveBoardId] = useState<string | undefined>(undefined);
  const [tabInfo, setTabInfo] = useState<{ title: string; url: string; favicon?: string } | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [dialog, setDialog] = useState<DialogMode | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    loadData().then((loaded) => {
      setData(loaded);
      setActiveBoardId(getInitialBoardId(loaded));
    });
    queryActiveTab().then(setTabInfo);
  }, []);

  const activeBoard = data?.boards.find((b) => b.id === activeBoardId);

  const linkWidgets = useMemo(() => {
    if (!data || !activeBoardId) return [];
    return getWidgetsForBoard(data, activeBoardId).filter((w): w is LinksWidget => w.type === 'links');
  }, [data, activeBoardId]);

  const [selectedWidgetId, setSelectedWidgetId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setSelectedWidgetId(linkWidgets[0]?.id);
  }, [linkWidgets]);

  const selectedWidget = useMemo(() => {
    if (!selectedWidgetId) return undefined;
    return linkWidgets.find((w) => w.id === selectedWidgetId);
  }, [linkWidgets, selectedWidgetId]);

  const handleSave = async () => {
    if (!tabInfo?.url || !activeBoardId || !data) return;
    setStatus('saving');

    let next = data;
    let widgetId = selectedWidgetId;

    if (!widgetId) {
      const widget = createWidget('links', activeBoard?.title || 'Links');
      next = addWidget(next, activeBoardId, widget);
      widgetId = widget.id;
    }

    const link = createLink(tabInfo.title, tabInfo.url);
    if (tabInfo.favicon) link.favicon = tabInfo.favicon;
    next = addLink(next, activeBoardId, widgetId, link);

    await saveData(next);
    setData(next);
    setStatus('saved');
    setTimeout(() => window.close(), 900);
  };

  const handleAddLink = async (title: string, url: string) => {
    if (!data || !activeBoardId) return;

    let next = data;
    let widgetId = selectedWidgetId;

    if (!widgetId) {
      const widget = createWidget('links', 'Links');
      next = addWidget(next, activeBoardId, widget);
      widgetId = widget.id;
      setSelectedWidgetId(widgetId);
    }

    const link = createLink(title, url);
    next = addLink(next, activeBoardId, widgetId, link);

    await saveData(next);
    setData(next);
    setDialog(null);
  };

  const handleEditLink = async (linkId: string, title: string, url: string) => {
    if (!data || !activeBoardId || !selectedWidgetId) return;

    const next = updateLink(data, activeBoardId, selectedWidgetId, linkId, { title, url });
    await saveData(next);
    setData(next);
    setDialog(null);
  };

  const handleDeleteLink = async (linkId: string) => {
    if (!data || !activeBoardId || !selectedWidgetId) return;

    const next = deleteLink(data, activeBoardId, selectedWidgetId, linkId);
    await saveData(next);
    setData(next);
  };

  const handleWidgetSave = async (title: string) => {
    if (!data || !activeBoardId || !selectedWidgetId) return;

    const next = updateWidget(data, activeBoardId, selectedWidgetId, { title });
    await saveData(next);
    setData(next);
    setDialog(null);
  };

  const handleWidgetDelete = async () => {
    if (!data || !activeBoardId || !selectedWidgetId) return;

    let next = deleteWidget(data, activeBoardId, selectedWidgetId);
    const remaining = getWidgetsForBoard(next, activeBoardId).filter((w): w is LinksWidget => w.type === 'links');
    setSelectedWidgetId(remaining[0]?.id);
    await saveData(next);
    setData(next);
    setDialog(null);
  };

  const editingLink = useMemo(() => {
    if (!dialog || typeof dialog !== 'object' || !('edit' in dialog)) return null;
    return selectedWidget?.items.find((l) => l.id === dialog.edit) || null;
  }, [dialog, selectedWidget]);

  if (!data) {
    return <div className="popup popup--loading">Carregando...</div>;
  }

  const editModeEnabled = data.settings.editMode !== false;

  if (!tabInfo) {
    return (
      <div className="popup">
        <div className="popup__header">
          <h1>Boards</h1>
        </div>
        <p className="popup__hint">Não foi possível ler a aba atual.</p>
      </div>
    );
  }

  return (
    <div className="popup">
      <div className="popup__header">
        <button
          className={`popup__menu-btn ${menuOpen ? 'popup__menu-btn--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          title={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <Menu size={22} strokeWidth={2} />
        </button>
      </div>

      <div className={`popup__menu-content ${menuOpen ? 'popup__menu-content--open' : ''}`}>
        <div className="popup__preview">
          <strong>{tabInfo.title}</strong>
          <span>{cleanUrl(tabInfo.url)}</span>
        </div>

        <label className="popup__field">
          <span>Board</span>
          <select
            value={activeBoardId}
            onChange={(e) => setActiveBoardId((e.target as HTMLSelectElement).value)}
            aria-label="Selecionar board"
          >
            {data.boards.map((board) => (
              <option key={board.id} value={board.id}>
                {board.title}
              </option>
            ))}
          </select>
        </label>

        <label className="popup__field">
          <span>Widget de links</span>
          <select
            value={selectedWidgetId}
            onChange={(e) => setSelectedWidgetId((e.target as HTMLSelectElement).value)}
            aria-label="Selecionar widget"
          >
            {linkWidgets.length === 0 && <option value="">Novo widget</option>}
            {linkWidgets.map((w) => (
              <option key={w.id} value={w.id}>
                {w.title}
              </option>
            ))}
          </select>
        </label>

        {selectedWidget && (
          <div className="popup__links-header">
            <div className="popup__links-header-left">
              <span className="popup__links-title">{selectedWidget.title}</span>
              {editModeEnabled && (
                <button
                  className="popup__icon-btn popup__icon-btn--small"
                  onClick={() => setDialog('widget')}
                  aria-label="Editar bloco"
                  title="Editar bloco"
                >
                  <Settings size={14} strokeWidth={2} />
                </button>
              )}
            </div>
          </div>
        )}

        {editModeEnabled && (
          <div className="popup__links-plus">
            <button
              className="popup__add-link-btn"
              onClick={() => setDialog('add-link')}
              aria-label="Adicionar link"
              title="Adicionar link"
            >
              <Plus size={18} strokeWidth={2} />
              Adicionar link
            </button>
          </div>
        )}

        {selectedWidget && selectedWidget.items.length > 0 && (
          <ul className="popup__links">
            {selectedWidget.items.map((link) => (
              <LinkRow
                key={link.id}
                link={link}
                data={data}
                onEdit={editModeEnabled ? () => setDialog({ edit: link.id }) : undefined}
                onDelete={editModeEnabled ? () => handleDeleteLink(link.id) : undefined}
              />
            ))}
          </ul>
        )}

        {selectedWidget && selectedWidget.items.length === 0 && (
          <p className="popup__empty">Nenhum link ainda.</p>
        )}

        {!selectedWidget && (
          <p className="popup__empty">Nenhum bloco de links. Adicione um link para criar um.</p>
        )}

        <div className="popup__divider" />

        {editModeEnabled && (
          <button
            className={`popup__save ${status === 'saved' ? 'popup__save--success' : ''}`}
            onClick={handleSave}
            disabled={status === 'saving' || status === 'saved'}
            aria-live="polite"
          >
            {status === 'saved' ? 'Salvo!' : status === 'saving' ? 'Salvando...' : `Salvar aba em ${activeBoard?.title}`}
          </button>
        )}

        <p className="popup__hint">Abra uma nova aba para ver seus boards.</p>
      </div>

      {dialog === 'add-link' && (
        <LinkDialog
          onSave={handleAddLink}
          onClose={() => setDialog(null)}
        />
      )}

      {typeof dialog === 'object' && dialog !== null && 'edit' in dialog && (
        <LinkDialog
          link={editingLink}
          onSave={(title, url) => handleEditLink(dialog.edit, title, url)}
          onClose={() => setDialog(null)}
        />
      )}

      {dialog === 'widget' && selectedWidget && (
        <WidgetDialog
          widget={selectedWidget}
          onSave={handleWidgetSave}
          onDelete={handleWidgetDelete}
          onClose={() => setDialog(null)}
        />
      )}
    </div>
  );
}

function LinkRow({
  link,
  data,
  onEdit,
  onDelete
}: {
  link: LinkItem;
  data?: AppData | null;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const favicon = link.favicon && !imageError ? link.favicon : getFaviconUrl(link.url);

  return (
    <li className="popup__link-row">
      <span className="popup__link-icon">
        {favicon ? (
          <img
            src={favicon}
            alt=""
            width="16"
            height="16"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <ExternalLink size={14} strokeWidth={2} />
        )}
      </span>
      <a
        href={link.url}
        target={data?.settings.openInNewTab !== false ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="popup__link-text"
        title={link.title}
      >
        {link.title}
      </a>
      <span className="popup__link-url">{cleanUrl(link.url)}</span>
      {(onEdit || onDelete) && (
        <div className="popup__link-actions">
          {onEdit && (
            <button
              className="popup__icon-btn popup__icon-btn--action"
              onClick={(e) => { e.stopPropagation(); onEdit(); }}
              aria-label={`Editar ${link.title}`}
              title="Editar"
            >
              <Pencil size={15} strokeWidth={2} />
            </button>
          )}
          {onDelete && (
            <button
              className="popup__icon-btn popup__icon-btn--action popup__icon-btn--danger"
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
              aria-label={`Excluir ${link.title}`}
              title="Excluir"
            >
              <Trash2 size={15} strokeWidth={2} />
            </button>
          )}
        </div>
      )}
    </li>
  );
}

function cleanUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}
