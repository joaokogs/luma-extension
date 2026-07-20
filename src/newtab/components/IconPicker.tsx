import { useState } from 'preact/hooks';
import { AnyIcon, ICON_PICKER_LIST } from './AnyIcon';

interface IconPickerProps {
  selected?: string | null;
  onSelect: (icon: string | null) => void;
}

export function IconPicker({ selected, onSelect }: IconPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? ICON_PICKER_LIST.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
    : ICON_PICKER_LIST;

  return (
    <div className="icon-picker">
      <button
        type="button"
        className="icon-picker__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Selecionar ícone"
        title="Ícone do link"
      >
        {selected ? <AnyIcon name={selected} size={18} /> : <span className="icon-picker__placeholder">+</span>}
      </button>
      {open && (
        <div className="icon-picker__dropdown">
          <input
            type="text"
            className="icon-picker__search"
            placeholder="Pesquisar ícone..."
            value={query}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            autoFocus
          />
          <div className="icon-picker__grid">
            {filtered.map((icon) => (
              <button
                key={icon.name}
                className={`icon-picker__option ${selected === icon.name ? 'icon-picker__option--active' : ''}`}
                onClick={() => {
                  onSelect(icon.name);
                  setOpen(false);
                  setQuery('');
                }}
                aria-label={icon.label}
                title={icon.label}
              >
                <AnyIcon name={icon.name} size={18} />
              </button>
            ))}
            <button
              className="icon-picker__option icon-picker__option--clear"
              onClick={() => {
                onSelect(null);
                setOpen(false);
                setQuery('');
              }}
              aria-label="Sem ícone"
              title="Sem ícone (usar favicon)"
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>✕</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
