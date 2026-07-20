import { useState } from 'preact/hooks';
import type { LinkItem } from '@shared/types';
import { normalizeUrl } from '@shared/storage';
import { Icon } from './Icon';
import { IconPicker } from './IconPicker';

interface LinkDialogProps {
  widgetTitle?: string;
  link?: LinkItem | null;
  onSave: (title: string, url: string, icon?: string) => void;
  onClose: () => void;
}

export function LinkDialog({ widgetTitle, link, onSave, onClose }: LinkDialogProps) {
  const isEdit = !!link;
  const [title, setTitle] = useState(link?.title || '');
  const [url, setUrl] = useState(link?.url || '');
  const [icon, setIcon] = useState<string | null>(link?.icon || null);

  const handleSave = () => {
    const normalized = normalizeUrl(url);
    if (!normalized) return;
    onSave(title.trim() || 'Link sem título', normalized, icon || undefined);
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal">
        <div className="modal__header">
          <h2>
            {isEdit ? 'Editar link' : 'Novo link'}
            {widgetTitle ? <span className="modal__subtitle"> em {widgetTitle}</span> : null}
          </h2>
          <button className="modal__close" onClick={onClose} aria-label="Fechar">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="dialog__body">
          <label className="widget-editor__field">
            <span>Ícone (opcional)</span>
            <div className="link-dialog__icon-row">
              <IconPicker selected={icon} onSelect={setIcon} />
              {icon && (
                <button
                  type="button"
                  className="link-dialog__icon-clear"
                  onClick={() => setIcon(null)}
                  aria-label="Remover ícone"
                >
                  <Icon name="close" size={14} />
                </button>
              )}
            </div>
          </label>

          <label className="widget-editor__field">
            <span>Título</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
              placeholder="Ex: Meu site favorito"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          </label>

          <label className="widget-editor__field">
            <span>URL</span>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl((e.target as HTMLInputElement).value)}
              placeholder="https://..."
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          </label>
        </div>

        <div className="modal__actions">
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleSave}
            disabled={!url.trim()}
          >
            {isEdit ? 'Salvar' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}
