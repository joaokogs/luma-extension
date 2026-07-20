import { useState, useEffect } from 'preact/hooks';

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

export function CalendarWidgetView() {
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(new Date());

  useEffect(() => {
    setToday(new Date());
  }, []);

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const prevMonth = () => setMonth(new Date(year, monthIndex - 1, 1));
  const nextMonth = () => setMonth(new Date(year, monthIndex + 1, 1));

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === monthIndex &&
      today.getFullYear() === year
    );
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="calendar-widget">
      <div className="calendar-widget__header">
        <button className="calendar-widget__nav" onClick={prevMonth} aria-label="Mês anterior">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="calendar-widget__month">{MONTHS[monthIndex]} {year}</span>
        <button className="calendar-widget__nav" onClick={nextMonth} aria-label="Próximo mês">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="calendar-widget__grid">
        {DAYS.map((d) => (
          <div key={d} className="calendar-widget__day-label">
            {d}
          </div>
        ))}
        {cells.map((day, idx) => (
          <div
            key={idx}
            className={`calendar-widget__day ${day === null ? 'calendar-widget__day--empty' : ''} ${day && isToday(day) ? 'calendar-widget__day--today' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
