import { useRef, useState, useEffect } from 'preact/hooks';
import type { AppSettings, TopWidgetConfig, TopWidgetType, WallpaperSetting } from '@shared/types';
import { DEFAULT_WALLPAPERS } from '@shared/types';
import { Icon } from './Icon';
import { CityAutocomplete } from './CityAutocomplete';

interface SettingsPanelProps {
  settings: AppSettings;
  onChange: (settings: Partial<AppSettings>) => void;
  onClose: () => void;
  onExport: () => void;
  onImport: (file: File) => void;
}

export function SettingsPanel({ settings, onChange, onClose, onExport, onImport }: SettingsPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customUrl, setCustomUrl] = useState(
    settings.wallpaper.type === 'url' ? settings.wallpaper.value : ''
  );
  const [topWidgets, setTopWidgets] = useState<TopWidgetConfig[]>(settings.topWidgets || []);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const applyCustomWallpaper = () => {
    if (customUrl.trim()) {
      onChange({ wallpaper: { type: 'url', value: customUrl.trim() } });
    }
  };

  const isSelected = (wp: WallpaperSetting) =>
    settings.wallpaper.type === wp.type && settings.wallpaper.value === wp.value;

  const updateTopWidget = (index: number, patch: Partial<TopWidgetConfig>) => {
    const next = topWidgets.map((w, i) => (i === index ? { ...w, ...patch } : w));
    setTopWidgets(next);
    onChange({ topWidgets: next });
  };

  const addTopWidget = () => {
    const next: TopWidgetConfig[] = [...topWidgets, { type: 'clock' }];
    setTopWidgets(next);
    onChange({ topWidgets: next });
  };

  const removeTopWidget = (index: number) => {
    const next = topWidgets.filter((_, i) => i !== index);
    setTopWidgets(next);
    onChange({ topWidgets: next });
  };

  return (
    <div className="settings-panel" ref={panelRef} role="dialog" aria-label="Configurações">
      <div className="settings-panel__header">
        <h3>Aparência</h3>
        <button className="settings-panel__close" onClick={onClose} aria-label="Fechar configurações">
          <Icon name="close" size={18} />
        </button>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Tema</label>
        <div className="theme-toggle">
          <button
            className={settings.theme === 'light' ? 'active' : ''}
            onClick={() => onChange({ theme: 'light' })}
            aria-label="Tema claro"
          >
            <Icon name="sun" size={16} />
            <span>Claro</span>
          </button>
          <button
            className={settings.theme === 'dark' ? 'active' : ''}
            onClick={() => onChange({ theme: 'dark' })}
            aria-label="Tema escuro"
          >
            <Icon name="moon" size={16} />
            <span>Escuro</span>
          </button>
          <button
            className={settings.theme === 'system' ? 'active' : ''}
            onClick={() => onChange({ theme: 'system' })}
            aria-label="Tema do sistema"
          >
            <span>Sistema</span>
          </button>
        </div>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Papel de parede</label>
        <div className="wallpaper-grid">
          {DEFAULT_WALLPAPERS.map((wp, index) => (
            <button
              key={index}
              className={`wallpaper-thumb ${isSelected(wp) ? 'wallpaper-thumb--active' : ''}`}
              style={{ background: wp.value }}
              onClick={() => onChange({ wallpaper: wp })}
              aria-label={`Selecionar wallpaper ${index + 1}`}
              title={`Wallpaper ${index + 1}`}
            />
          ))}
        </div>

        <div className="custom-wallpaper">
          <input
            type="url"
            placeholder="URL da imagem customizada"
            value={customUrl}
            onChange={(e) => setCustomUrl((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => e.key === 'Enter' && applyCustomWallpaper()}
            aria-label="URL de imagem customizada"
          />
          <button onClick={applyCustomWallpaper} aria-label="Aplicar wallpaper customizado">
            <Icon name="check" size={16} />
          </button>
        </div>
      </div>

      <div className="settings-panel__section">
        <div className="settings-panel__label-row">
          <label className="settings-panel__label">Widgets do topo</label>
          <button className="settings-panel__add" onClick={addTopWidget} aria-label="Adicionar widget do topo">
            <Icon name="plus" size={14} />
          </button>
        </div>
        <div className="top-widgets-list">
          {topWidgets.map((w, i) => (
            <div key={i} className="top-widgets-item">
              <select
                value={w.type}
                onChange={(e) => updateTopWidget(i, { type: (e.target as HTMLSelectElement).value as TopWidgetType })}
              >
                <option value="weather">Clima</option>
                <option value="focus">Foco</option>
                <option value="clock">Relógio</option>
              </select>
              {w.type === 'weather' && (
                <CityAutocomplete
                  value={w.city || ''}
                  onChange={(city) => updateTopWidget(i, { city })}
                  placeholder="Cidade"
                  id={`top-widget-city-${i}`}
                />
              )}
              {w.type === 'clock' && (
                <>
                  <input
                    type="text"
                    placeholder="Timezone"
                    value={w.timezone || ''}
                    onChange={(e) => updateTopWidget(i, { timezone: (e.target as HTMLInputElement).value })}
                  />
                  <input
                    type="text"
                    placeholder="Label"
                    value={w.label || ''}
                    onChange={(e) => updateTopWidget(i, { label: (e.target as HTMLInputElement).value })}
                  />
                </>
              )}
              {w.type === 'focus' && (
                <input
                  type="number"
                  placeholder="Minutos meta"
                  value={w.targetMinutes || 240}
                  onChange={(e) => updateTopWidget(i, { targetMinutes: Number((e.target as HTMLInputElement).value) })}
                />
              )}
              <button
                className="top-widgets-item__remove"
                onClick={() => removeTopWidget(i)}
                aria-label="Remover widget do topo"
              >
                <Icon name="trash" size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Backup</label>
        <div className="backup-actions">
          <button className="btn btn--secondary" onClick={onExport}>
            <Icon name="download" size={14} /> Exportar JSON
          </button>
          <button className="btn btn--secondary" onClick={() => fileInputRef.current?.click()}>
            <Icon name="upload" size={14} /> Importar JSON
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = (e.target as HTMLInputElement).files?.[0];
              if (file) onImport(file);
              (e.target as HTMLInputElement).value = '';
            }}
          />
        </div>
      </div>
    </div>
  );
}
