import { useEffect, useState } from 'preact/hooks';

interface FocusWidgetViewProps {
  targetMinutes?: number;
}

export function FocusWidgetView({ targetMinutes = 240 }: FocusWidgetViewProps) {
  const [focusedMinutes, setFocusedMinutes] = useState(0);

  useEffect(() => {
    // Mock daily focus time from localStorage
    const today = new Date().toDateString();
    const saved = localStorage.getItem(`focusToday-${today}`);
    if (saved) setFocusedMinutes(parseInt(saved, 10));
  }, []);

  const hours = Math.floor(focusedMinutes / 60);
  const minutes = focusedMinutes % 60;
  const display = `${hours}h ${minutes.toString().padStart(2, '0')}m`;
  const progress = Math.min((focusedMinutes / targetMinutes) * 100, 100);

  return (
    <div className="focus-widget">
      <div className="focus-widget__label">FOCUS TODAY</div>
      <div className="focus-widget__value">{display}</div>
      <div className="focus-widget__bar">
        <div className="focus-widget__progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
