import type { TopWidgetConfig } from '@shared/types';
import { ClockWidgetView } from './ClockWidget';
import { WeatherWidgetView } from './WeatherWidget';
import { FocusWidgetView } from './FocusWidget';

interface TopInfoWidgetsProps {
  configs: TopWidgetConfig[];
}

export function TopInfoWidgets({ configs }: TopInfoWidgetsProps) {
  return (
    <div className="top-info-widgets">
      {configs.map((config, index) => (
        <div key={`${config.type}-${index}`} className="top-info-widget">
          <TopWidget config={config} />
        </div>
      ))}
    </div>
  );
}

function TopWidget({ config }: { config: TopWidgetConfig }) {
  switch (config.type) {
    case 'weather':
      return <WeatherWidgetView city={config.city} />;
    case 'focus':
      return <FocusWidgetView targetMinutes={config.targetMinutes} />;
    case 'clock':
      return <ClockWidgetView timezone={config.timezone} label={config.label} />;
    default:
      return null;
  }
}
