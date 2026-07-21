import { useState, useRef, useEffect } from 'preact/hooks';
import { X } from 'lucide-preact';

interface NewTabDialogProps {
  open: boolean;
  onSave: (title: string) => void;
  onClose: () => void;
}

export function NewTabDialog({ open, onSave, onClose }: NewTabDialogProps) {
  const [title, setTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTitle('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleSave = () => {
    const trimmed = title.trim();
    if (trimmed) {
      onSave(trimmed);
    }
  };

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Nova aba"
    >
      <div className="modal">
        <div className="modal__header">
          <h2>Nova aba</h2>
          <button className="modal__close" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
        </div>

        <div className="dialog__body">
          <label className="widget-editor__field">
            <span>Nome da aba</span>
            <input
              ref={inputRef}
              type="text"
              value={title}
              onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
              placeholder="Ex: Trabalho, Estudos..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') onClose();
              }}
              maxLength={50}
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
            disabled={!title.trim()}
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
