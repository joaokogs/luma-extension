import { useState } from 'preact/hooks';
import { ICON_PICKER_LIST, getLucideIcon } from './AnyIcon';


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

  const SelectedIcon = selected ? getLucideIcon(selected) : null;

  return (
    <div className="icon-picker">
      <button
        type="button"
        className="icon-picker__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Selecionar ícone"
        title="Ícone do link"
      >
        {SelectedIcon ? <SelectedIcon size={18} strokeWidth={2} /> : <span className="icon-picker__placeholder">+</span>}
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
            {filtered.map((item) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.name}
                  className={`icon-picker__option ${selected === item.name ? 'icon-picker__option--active' : ''}`}
                  onClick={() => {
                    onSelect(item.name);
                    setOpen(false);
                    setQuery('');
                  }}
                  aria-label={item.label}
                  title={item.label}
                >
                  <ItemIcon size={18} strokeWidth={2} />
                </button>
              );
            })}
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
