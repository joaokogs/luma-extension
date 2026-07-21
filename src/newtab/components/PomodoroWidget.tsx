import { useState, useEffect, useRef } from 'preact/hooks';
import { RotateCcw, SkipForward, Play, Pause } from 'lucide-preact';

type Mode = 'focus' | 'short' | 'long';

const DURATIONS: Record<Mode, number> = {
  focus: 25 * 60,
  short: 5 * 60,
  long: 15 * 60
};

export function PomodoroWidgetView() {
  const [mode, setMode] = useState<Mode>('focus');
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setIsRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, secondsLeft]);

  const changeMode = (next: Mode) => {
    setMode(next);
    setSecondsLeft(DURATIONS[next]);
    setIsRunning(false);
  };

  const reset = () => {
    setSecondsLeft(DURATIONS[mode]);
    setIsRunning(false);
  };

  const toggle = () => setIsRunning((r) => !r);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const progress = (secondsLeft / DURATIONS[mode]) * 100;

  return (
    <div className="pomodoro-widget">
      <div className="pomodoro-widget__modes">
        {(['focus', 'short', 'long'] as Mode[]).map((m) => (
          <button
            key={m}
            className={`pomodoro-widget__mode ${mode === m ? 'pomodoro-widget__mode--active' : ''}`}
            onClick={() => changeMode(m)}
          >
            {m === 'focus' ? 'Focus' : m === 'short' ? 'Short Break' : 'Long Break'}
          </button>
        ))}
      </div>
      <div className="pomodoro-widget__timer">
        <div
          className="pomodoro-widget__ring"
          style={{
            background: `conic-gradient(var(--accent) ${progress * 3.6}deg, var(--bg-hover) 0deg)`
          }}
        />
        <span className="pomodoro-widget__time">{display}</span>
      </div>
      <div className="pomodoro-widget__controls">
        <button className="pomodoro-widget__btn" onClick={reset} aria-label="Reiniciar">
          <RotateCcw size={18} strokeWidth={2} />
        </button>
        <button className="pomodoro-widget__btn pomodoro-widget__btn--primary" onClick={toggle} aria-label={isRunning ? 'Pausar' : 'Iniciar'}>
          {isRunning ? <Pause size={22} strokeWidth={2} /> : <Play size={22} strokeWidth={2} />}
        </button>
        <button className="pomodoro-widget__btn" onClick={() => changeMode(mode)} aria-label="Próximo">
          <SkipForward size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
