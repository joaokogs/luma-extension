import { useRef, useState, useEffect } from 'preact/hooks';
import type { AppSettings, WallpaperSetting } from '@shared/types';
import { DEFAULT_WALLPAPERS } from '@shared/types';
import { Icon } from './Icon';

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

  return (
    <div className="settings-panel" ref={panelRef} role="dialog" aria-label="Configurações">
      <div className="settings-panel__header">
        <h3>Configurações</h3>
        <button className="settings-panel__close" onClick={onClose} aria-label="Fechar configurações">
          <Icon name="close" size={18} />
        </button>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Modo de Edição</label>
        <div className="settings-panel__toggle-row">
          <span className="settings-panel__toggle-desc">Permitir adicionar, editar e excluir widgets</span>
          <label className="widget-toolbar__toggle">
            <input
              type="checkbox"
              checked={settings.editMode !== false}
              onChange={() => onChange({ editMode: settings.editMode === false ? true : false })}
            />
            <span className="widget-toolbar__toggle-slider" />
          </label>
        </div>
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
