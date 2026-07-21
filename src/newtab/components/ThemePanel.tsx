import { useRef, useEffect, useCallback, useState } from 'preact/hooks';
import { HexColorPicker } from 'react-colorful';
import { useThemeStore } from '../store/useThemeStore';
import type { WallpaperSetting } from '@shared/types';
import { X } from 'lucide-preact';

interface ThemePanelProps {
  wallpaper: WallpaperSetting;
  isDark: boolean;
  onClose: () => void;
}

export function ThemePanel({ wallpaper, isDark, onClose }: ThemePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const themeConfig = useThemeStore((s) => s.themeConfig);
  const updateThemeConfig = useThemeStore((s) => s.updateThemeConfig);
  const applyFromWallpaper = useThemeStore((s) => s.applyFromWallpaper);

  const [applying, setApplying] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const handleResetFromWallpaper = useCallback(async () => {
    setApplying(true);
    await applyFromWallpaper(wallpaper, isDark);
    setApplying(false);
  }, [wallpaper, isDark, applyFromWallpaper]);

  return (
    <div className="settings-panel" ref={panelRef} role="dialog" aria-label="Personalizar tema">
      <div className="settings-panel__header">
        <h3>Tema</h3>
        <button className="settings-panel__close" onClick={onClose} aria-label="Fechar tema">
          <X size={18} />
        </button>
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
              style={{ background: themeConfig.primaryColor }}
            />
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
              style={{ background: themeConfig.boardColor }}
            />
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
          {applying ? 'Extraindo cores...' : 'Redefinir do wallpaper'}
        </button>
      </div>
    </div>
  );
}
