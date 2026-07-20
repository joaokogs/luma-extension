import { useState } from 'preact/hooks';
import type { LinkItem } from '@shared/types';
import { normalizeUrl } from '@shared/storage';
import { Icon } from './Icon';

interface LinkDialogProps {
  link?: LinkItem | null;
  onSave: (title: string, url: string) => void;
  onClose: () => void;
}

export function LinkDialog({ link, onSave, onClose }: LinkDialogProps) {
  const isEdit = !!link;
  const [title, setTitle] = useState(link?.title || '');
  const [url, setUrl] = useState(link?.url || '');

  const handleSave = () => {
    const normalized = normalizeUrl(url);
    if (!normalized) return;
    onSave(title.trim() || 'Link sem título', normalized);
  };

  return (
    <div className="dialog-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true">
      <div className="dialog">
        <div className="dialog__header">
          <h2>{isEdit ? 'Editar link' : 'Adicionar link'}</h2>
          <button className="dialog__close" onClick={onClose} aria-label="Fechar">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="dialog__body">
          <label className="dialog__field">
            <span>Título</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
              placeholder="Ex: Meu site favorito"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          </label>
          <label className="dialog__field">
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

        <div className="dialog__actions">
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="btn btn--primary" onClick={handleSave} disabled={!url.trim()}>
            {isEdit ? 'Salvar' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}
