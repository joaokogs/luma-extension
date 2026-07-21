import { useRef, useState, useEffect, useCallback } from 'preact/hooks';
import { HexColorPicker } from 'react-colorful';
import type { AppSettings, WallpaperSetting } from '@shared/types';
import { DEFAULT_WALLPAPERS } from '@shared/types';
import { useThemeStore } from '../store/useThemeStore';
import { X, Sun, Moon, Upload, Trash2 } from 'lucide-preact';

const MAX_UPLOADS = 5;

interface BackgroundPanelProps {
  settings: AppSettings;
  onChange: (settings: Partial<AppSettings>) => void;
  onClose: () => void;
}

export function BackgroundPanel({ settings, onChange, onClose }: BackgroundPanelProps) {
  const [applying, setApplying] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const themeConfig = useThemeStore((s) => s.themeConfig);
  const updateThemeConfig = useThemeStore((s) => s.updateThemeConfig);
  const applyFromWallpaper = useThemeStore((s) => s.applyFromWallpaper);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const handleWallpaperSelect = useCallback(async (wp: WallpaperSetting) => {
    onChange({ wallpaper: wp });
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const actualDark = settings.theme === 'dark' || (settings.theme === 'system' && prefersDark);
    setApplying(true);
    await applyFromWallpaper(wp, actualDark);
    setApplying(false);
  }, [onChange, applyFromWallpaper, settings.theme]);

  const handleResetFromWallpaper = useCallback(async () => {
    setApplying(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const actualDark = settings.theme === 'dark' || (settings.theme === 'system' && prefersDark);
    await applyFromWallpaper(settings.wallpaper, actualDark);
    setApplying(false);
  }, [settings.wallpaper, settings.theme, applyFromWallpaper]);

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (fileArray.length === 0) return;

    const current = settings.uploadedBackgrounds || [];
    const available = MAX_UPLOADS - current.length;
    if (available <= 0) return;

    const toUpload = fileArray.slice(0, available);
    const results: string[] = [];

    for (const file of toUpload) {
      try {
        const dataUrl = await readFileAsDataURL(file);
        results.push(dataUrl);
      } catch {
        // skip failed reads
      }
    }

    if (results.length === 0) return;
    onChange({ uploadedBackgrounds: [...current, ...results] });
  }, [settings.uploadedBackgrounds, onChange]);

  const handleFileInput = useCallback((e: Event) => {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      handleFiles(input.files);
      input.value = '';
    }
  }, [handleFiles]);

  const handleDeleteUploaded = useCallback((index: number) => {
    const current = settings.uploadedBackgrounds || [];
    const updated = current.filter((_, i) => i !== index);
    onChange({ uploadedBackgrounds: updated });

    const deleted = current[index];
    if (deleted && settings.wallpaper.type === 'url' && settings.wallpaper.value === deleted) {
      onChange({ wallpaper: DEFAULT_WALLPAPERS[0] });
    }
  }, [settings.uploadedBackgrounds, settings.wallpaper, onChange]);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer?.files) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  }, []);

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const isSelected = (wp: WallpaperSetting) =>
    settings.wallpaper.type === wp.type && settings.wallpaper.value === wp.value;

  const uploadedBackgrounds = settings.uploadedBackgrounds || [];
  const canUpload = uploadedBackgrounds.length < MAX_UPLOADS;

  return (
    <div className="settings-panel" ref={panelRef} role="dialog" aria-label="Personalizar aparência">
      <div className="settings-panel__header">
        <h3>Aparência</h3>
        <button className="settings-panel__close" onClick={onClose} aria-label="Fechar">
          <X size={18} />
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
            <Sun size={16} strokeWidth={2} />
            <span>Claro</span>
          </button>
          <button
            className={settings.theme === 'dark' ? 'active' : ''}
            onClick={() => onChange({ theme: 'dark' })}
            aria-label="Tema escuro"
          >
            <Moon size={16} strokeWidth={2} />
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
              onClick={() => handleWallpaperSelect(wp)}
              disabled={applying}
              aria-label={`Selecionar wallpaper ${index + 1}`}
              title={`Wallpaper ${index + 1}`}
            />
          ))}
          {uploadedBackgrounds.map((dataUrl, index) => (
            <div key={`uploaded-${index}`} className="wallpaper-thumb-wrapper">
              <button
                className={`wallpaper-thumb ${isSelected({ type: 'url', value: dataUrl }) ? 'wallpaper-thumb--active' : ''}`}
                style={{ backgroundImage: `url(${dataUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                onClick={() => handleWallpaperSelect({ type: 'url', value: dataUrl })}
                disabled={applying}
                aria-label={`Selecionar imagem ${index + 1}`}
                title={`Imagem ${index + 1}`}
              />
              <button
                className="wallpaper-thumb__delete"
                onClick={(e) => { e.stopPropagation(); handleDeleteUploaded(index); }}
                aria-label={`Excluir imagem ${index + 1}`}
                title="Excluir"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
          {canUpload && (
            <button
              className="wallpaper-upload"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Fazer upload de imagem"
              title="Upload de imagem"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <Upload size={20} />
              <span>Upload</span>
            </button>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileInput}
        />

        {canUpload && (
          <div
            className={`wallpaper-dropzone ${dragOver ? 'wallpaper-dropzone--drag-over' : ''}`}
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            role="button"
            tabIndex={0}
            aria-label="Arraste imagens ou clique para fazer upload"
            onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
          >
            <Upload size={18} />
            <span>Arraste imagens ou clique para fazer upload</span>
            <span className="wallpaper-dropzone__hint">
              {uploadedBackgrounds.length}/{MAX_UPLOADS} usadas
            </span>
          </div>
        )}

      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Cor principal</label>
        <div className="theme-color-picker">
          <HexColorPicker
            color={themeConfig.primaryColor}
            onChange={(color: string) => updateThemeConfig({ primaryColor: color })}
          />
          <div className="theme-color-input-row">
            <span
              className="theme-color-swatch"
            >
              <span style={{ background: themeConfig.primaryColor }} />
            </span>
            <input
              type="text"
              value={themeConfig.primaryColor}
              onChange={(e) => {
                const val = (e.target as HTMLInputElement).value;
                if (/^#[0-9a-fA-F]{6}$/.test(val)) {
                  updateThemeConfig({ primaryColor: val });
                }
              }}
              className="theme-color-input"
              aria-label="Cor principal (hex)"
            />
          </div>
        </div>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">Cor dos blocos</label>
        <div className="theme-color-picker">
          <HexColorPicker
            color={themeConfig.boardColor}
            onChange={(color: string) => updateThemeConfig({ boardColor: color })}
          />
          <div className="theme-color-input-row">
            <span
              className="theme-color-swatch"
            >
              <span style={{ background: themeConfig.boardColor }} />
            </span>
            <input
              type="text"
              value={themeConfig.boardColor}
              onChange={(e) => {
                const val = (e.target as HTMLInputElement).value;
                if (/^#[0-9a-fA-F]{6}$/.test(val)) {
                  updateThemeConfig({ boardColor: val });
                }
              }}
              className="theme-color-input"
              aria-label="Cor dos blocos (hex)"
            />
          </div>
        </div>
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">
          Opacidade: {Math.round(themeConfig.boardOpacity * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(themeConfig.boardOpacity * 100)}
          onChange={(e) => {
            const val = parseInt((e.target as HTMLInputElement).value, 10);
            updateThemeConfig({ boardOpacity: val / 100 });
          }}
          className="theme-slider"
          aria-label="Opacidade dos blocos"
        />
      </div>

      <div className="settings-panel__section">
        <label className="settings-panel__label">
          Desfoque: {themeConfig.boardBlur}px
        </label>
        <input
          type="range"
          min="0"
          max="32"
          value={themeConfig.boardBlur}
          onChange={(e) => {
            const val = parseInt((e.target as HTMLInputElement).value, 10);
            updateThemeConfig({ boardBlur: val });
          }}
          className="theme-slider"
          aria-label="Desfoque dos blocos"
        />
      </div>

      <div className="settings-panel__section">
        <button
          className="btn btn--primary"
          style={{ width: '100%' }}
          onClick={handleResetFromWallpaper}
          disabled={applying}
        >
          {applying ? 'Extraindo cores...' : 'Redefinir cores do wallpaper'}
        </button>
      </div>
    </div>
  );
}
