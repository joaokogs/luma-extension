import { useRef, useEffect } from 'preact/hooks';
import type { AppSettings } from '@shared/types';
import { Icon } from './Icon';

interface SettingsPanelProps {
  settings: AppSettings;
  onChange: (settings: Partial<AppSettings>) => void;
  onClose: () => void;
  onExport: () => void;
  onImport: (file: File) => void;
  onClearRecentSearches?: () => void;
}

export function SettingsPanel({ settings, onChange, onClose, onExport, onImport, onClearRecentSearches }: SettingsPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
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
        <label className="settings-panel__label">Abrir em uma nova guia</label>
        <div className="settings-panel__toggle-row">
          <span className="settings-panel__toggle-desc">Abrir links e buscas em uma nova guia</span>
          <label className="widget-toolbar__toggle">
            <input
              type="checkbox"
              checked={settings.openInNewTab !== false}
              onChange={() => onChange({ openInNewTab: settings.openInNewTab === false ? true : false })}
            />
            <span className="widget-toolbar__toggle-slider" />
          </label>
        </div>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Histórico de Buscas</label>
        <div className="backup-actions">
          <button className="btn btn--danger" onClick={() => onClearRecentSearches?.()} disabled={!(settings.recentSearches && settings.recentSearches.length > 0)}>
            <Icon name="trash" size={14} /> Limpar histórico
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
