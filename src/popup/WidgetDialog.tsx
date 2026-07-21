import { useState } from 'preact/hooks';
import type { LinksWidget } from '@shared/types';
import { X, Trash2 } from 'lucide-preact';

interface WidgetDialogProps {
  widget: LinksWidget;
  onSave: (title: string) => void;
  onDelete: () => void;
  onClose: () => void;
}

export function WidgetDialog({ widget, onSave, onDelete, onClose }: WidgetDialogProps) {
  const [title, setTitle] = useState(widget.title);

  const handleSave = () => {
    onSave(title.trim() || widget.title);
  };

  return (
    <div className="dialog-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true">
      <div className="dialog">
        <div className="dialog__header">
          <h2>Editar bloco</h2>
          <button className="dialog__close" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
        </div>

        <div className="dialog__body">
          <label className="dialog__field">
            <span>Título</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
              placeholder="Nome do bloco"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          </label>
        </div>

        <div className="dialog__actions">
          <button type="button" className="btn btn--danger" onClick={onDelete}>
            <Trash2 size={14} strokeWidth={2} />
            Excluir bloco
          </button>
          <div style={{ flex: 1 }} />
          <button type="button" className="btn btn--secondary" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="btn btn--primary" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
