import { useState, useRef, useEffect } from 'preact/hooks';
import type { TodoItem, TodoWidget } from '@shared/types';
import { Check, Plus, Pencil, Trash2, X } from 'lucide-preact';

interface TodoWidgetViewProps {
  widget: TodoWidget;
  onAddTodo?: (text: string) => void;
  onToggleTodo?: (todoId: string) => void;
  onUpdateTodo?: (todoId: string, text: string) => void;
  onDeleteTodo?: (todoId: string) => void;
}

export function TodoWidgetView({
  widget,
  onAddTodo,
  onToggleTodo,
  onUpdateTodo,
  onDeleteTodo
}: TodoWidgetViewProps) {
  const [newText, setNewText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingId]);

  const handleAdd = () => {
    const text = newText.trim();
    if (!text) return;
    onAddTodo?.(text);
    setNewText('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  };

  const handleEditKeyDown = (e: KeyboardEvent, todoId: string) => {
    if (e.key === 'Enter') {
      saveEdit(todoId);
    } else if (e.key === 'Escape') {
      setEditingId(null);
    }
  };

  const startEdit = (todo: TodoItem) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (todoId: string) => {
    const text = editText.trim();
    if (text) {
      onUpdateTodo?.(todoId, text);
    }
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const completedCount = widget.items.filter((t) => t.done).length;

  return (
    <div className="todo-widget">
      <h3 className="todo-widget__title">{widget.title}</h3>

      {onAddTodo && (
        <div className="todo-widget__input-row">
          <input
            ref={inputRef}
            type="text"
            className="todo-widget__input"
            value={newText}
            onChange={(e) => setNewText((e.target as HTMLInputElement).value)}
            onKeyDown={handleKeyDown}
            placeholder="Nova nota..."
            aria-label="Nova nota"
          />
          <button
            className="todo-widget__add-btn"
            onClick={handleAdd}
            disabled={!newText.trim()}
            aria-label="Adicionar nota"
          >
            <Plus size={16} strokeWidth={2} />
          </button>
        </div>
      )}

      <ul className="todo-widget__list">
        {widget.items.map((todo) => (
          <li
            key={todo.id}
            className={`todo-widget__item ${todo.done ? 'todo-widget__item--done' : ''}`}
          >
            <button
              className="todo-widget__checkbox"
              onClick={() => onToggleTodo?.(todo.id)}
              aria-label={todo.done ? 'Marcar como pendente' : 'Marcar como concluído'}
            >
              {todo.done && <Check size={12} strokeWidth={3} />}
            </button>

            {editingId === todo.id ? (
              <div className="todo-widget__edit-row">
                <input
                  ref={editInputRef}
                  type="text"
                  className="todo-widget__edit-input"
                  value={editText}
                  onChange={(e) => setEditText((e.target as HTMLInputElement).value)}
                  onKeyDown={(e) => handleEditKeyDown(e, todo.id)}
                  aria-label="Editar nota"
                />
                <button
                  className="todo-widget__edit-confirm"
                  onClick={() => saveEdit(todo.id)}
                  aria-label="Salvar"
                >
                  <Check size={14} strokeWidth={2} />
                </button>
                <button
                  className="todo-widget__edit-cancel"
                  onClick={cancelEdit}
                  aria-label="Cancelar"
                >
                  <X size={14} strokeWidth={2} />
                </button>
              </div>
            ) : (
              <>
                <span
                  className="todo-widget__text"
                  onClick={() => onToggleTodo?.(todo.id)}
                >
                  {todo.text}
                </span>
                <div className="todo-widget__actions">
                  <button
                    className="todo-widget__action-btn"
                    onClick={() => startEdit(todo)}
                    aria-label="Editar nota"
                  >
                    <Pencil size={12} strokeWidth={2} />
                  </button>
                  <button
                    className="todo-widget__action-btn todo-widget__action-btn--danger"
                    onClick={() => onDeleteTodo?.(todo.id)}
                    aria-label="Excluir nota"
                  >
                    <Trash2 size={12} strokeWidth={2} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {widget.items.length > 0 && (
        <div className="todo-widget__footer">
          {completedCount}/{widget.items.length} notas concluídas
        </div>
      )}
    </div>
  );
}
