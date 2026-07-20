import { useEffect, useState } from 'preact/hooks';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
    hour12: true
  };

  const timeStr = timezone ? now.toLocaleTimeString('en-US', options) : formatTime(now);
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
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}
