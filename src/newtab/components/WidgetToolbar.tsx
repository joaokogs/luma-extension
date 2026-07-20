import { useState, useEffect, useRef } from 'preact/hooks';
import type { WidgetType, TopWidgetConfig } from '@shared/types';
import { Icon, type IconName } from './Icon';
import { CityAutocomplete } from './CityAutocomplete';

interface WidgetOption {
  type: WidgetType | 'board' | 'notes' | 'search';
  label: string;
  icon: IconName;
  hasToggle?: boolean;
  hasAdd?: boolean;
  hasCity?: boolean;
  requiresWidget?: WidgetType;
}

const WIDGET_OPTIONS: WidgetOption[] = [
  { type: 'notes', label: 'Notes', icon: 'edit', hasAdd: true },
  { type: 'calendar', label: 'Calendar', icon: 'grid', hasAdd: true },
  { type: 'pomodoro', label: 'Pomodoro', icon: 'clock', hasAdd: true },
  { type: 'clock', label: 'Clock', icon: 'clock', hasToggle: true },
  { type: 'search', label: 'Search', icon: 'search', hasToggle: true },
  { type: 'focus', label: 'Focus', icon: 'target', hasToggle: true, requiresWidget: 'pomodoro' },
  { type: 'weather', label: 'Weather', icon: 'cloud-sun', hasToggle: true, hasCity: true }
];

interface WidgetToolbarProps {
  topWidgets: TopWidgetConfig[];
  boardWidgets: WidgetType[];
  onToggleWidget: (type: WidgetType) => void;
  onAddWidget: (type: WidgetType) => void;
  onCityChange: (city: string) => void;
  onClose: () => void;
}

export function WidgetToolbar({
  topWidgets,
  boardWidgets,
  onToggleWidget,
  onAddWidget,
  onCityChange,
  onClose
}: WidgetToolbarProps) {
  const [cityInput, setCityInput] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const weatherWidget = topWidgets.find((w) => w.type === 'weather');
    if (weatherWidget?.city) {
      setCityInput(weatherWidget.city);
    }
  }, [topWidgets]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const isWidgetActive = (type: WidgetType) => {
    return topWidgets.some((w) => w.type === type);
  };

  const filteredOptions = WIDGET_OPTIONS.filter((option) => {
    if (option.requiresWidget) return boardWidgets.includes(option.requiresWidget);
    return true;
  });

  const handleApplyCity = () => {
    if (cityInput.trim()) {
      onCityChange(cityInput.trim());
    }
  };

  return (
    <div className="widget-toolbar" ref={panelRef}>
      <div className="widget-toolbar__header">
        <h3>WIDGETS</h3>
      </div>

      <div className="widget-toolbar__list">
        {filteredOptions.map((option) => {
          const isActive = option.type !== 'board' && option.type !== 'notes'
            ? isWidgetActive(option.type as WidgetType)
            : false;

          return (
            <div key={option.type} className="widget-toolbar__item">
              <div className="widget-toolbar__item-info">
                <Icon name={option.icon} size={18} />
                <span>{option.label}</span>
              </div>

              {option.hasAdd && (
                <button
                  className="widget-toolbar__add-btn"
                  onClick={() => onAddWidget(option.type as WidgetType)}
                >
                  Add
                </button>
              )}

              {option.hasToggle && (
                <label className="widget-toolbar__toggle">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => onToggleWidget(option.type as WidgetType)}
                  />
                  <span className="widget-toolbar__toggle-slider" />
                </label>
              )}
            </div>
          );
        })}
      </div>

      {isWidgetActive('weather') && (
        <div className="widget-toolbar__city">
          <CityAutocomplete
            value={cityInput}
            onChange={setCityInput}
            onSelect={onCityChange}
            placeholder="Cidade"
            id="widget-toolbar-city"
          />
          <button
            className="widget-toolbar__apply-btn"
            onClick={handleApplyCity}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
