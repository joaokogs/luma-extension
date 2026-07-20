import { useEffect, useState } from 'preact/hooks';

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export function ClockWidgetView({ timezone, label }: { timezone?: string; label?: string }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  };

  const timeStr = timezone ? now.toLocaleTimeString('pt-BR', options) : formatTime(now);
  const weekday = WEEKDAYS[now.getDay()];
  const month = MONTHS[now.getMonth()];
  const day = now.getDate();
  const displayLabel = label || `${weekday} ${month} ${day}`;

  return (
    <div className="clock-widget">
      <div className="clock-widget__label">{displayLabel}</div>
      <div className="clock-widget__time">{timeStr}</div>
    </div>
  );
}

function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
