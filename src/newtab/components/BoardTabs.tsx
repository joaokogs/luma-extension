import { useState, useRef, useEffect } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import type { Board } from '@shared/types';
import { Icon } from './Icon';

interface BoardTabsProps {
  boards: Board[];
  activeId?: string;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onRename: (id: string, title: string) => void;
  onDelete: (id: string, title: string) => void;
}

export function BoardTabs({ boards, activeId, onSelect, onAdd, onRename, onDelete }: BoardTabsProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const kebabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingId]);

  useEffect(() => {
    if (!menuOpenId) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpenId]);

  const startRename = (board: Board) => {
    setEditingId(board.id);
    setEditValue(board.title);
    setMenuOpenId(null);
  };

  const commitRename = () => {
    if (editingId) {
      onRename(editingId, editValue);
      setEditingId(null);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') commitRename();
    if (e.key === 'Escape') setEditingId(null);
  };

  const openMenu = (boardId: string) => {
    const btn = kebabRefs.current[boardId];
    triggerRef.current = btn ?? null;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
    }
    setMenuOpenId(boardId);
  };

  const handleContextMenu = (e: MouseEvent, boardId: string) => {
    e.preventDefault();
    openMenu(boardId);
  };

  const handleKebabClick = (e: MouseEvent, boardId: string) => {
    e.stopPropagation();
    if (menuOpenId === boardId) {
      setMenuOpenId(null);
    } else {
      openMenu(boardId);
    }
  };

  const handleAction = (fn?: () => void) => (e: MouseEvent) => {
    e.stopPropagation();
    setMenuOpenId(null);
    fn?.();
  };

  return (
    <nav className="board-tabs" aria-label="Boards">
      {boards.map((board) => (
        <div
          key={board.id}
          className={`board-tab ${board.id === activeId ? 'board-tab--active' : ''}`}
          onClick={() => onSelect(board.id)}
          onContextMenu={(e) => handleContextMenu(e, board.id)}
          role="button"
          tabIndex={0}
          aria-label={`Abrir board ${board.title}`}
          onKeyDown={(e) => e.key === 'Enter' && onSelect(board.id)}
        >
          {editingId === board.id ? (
            <input
              ref={inputRef}
              className="board-tab__input"
              value={editValue}
              onChange={(e) => setEditValue((e.target as HTMLInputElement).value)}
              onBlur={commitRename}
              onKeyDown={handleKeyDown}
              onClick={(e) => e.stopPropagation()}
              aria-label="Renomear board"
            />
          ) : (
            <>
              <span className="board-tab__title">{board.title}</span>
              {board.id === activeId && (
                <div className="board-tab__actions">
                  <button
                    ref={(el) => { kebabRefs.current[board.id] = el; }}
                    className="board-tab__kebab"
                    onClick={(e) => handleKebabClick(e, board.id)}
                    aria-label="Ações da aba"
                    title="Ações"
                  >
                    <Icon name="more-vertical" size={12} />
                  </button>
                  {menuOpenId === board.id && createPortal(
                    <div
                      ref={menuRef}
                      className="board-tab__menu"
                      style={{ position: 'fixed', top: menuPos.top, right: menuPos.right }}
                    >
                      <button
                        className="board-tab__menu-item"
                        onClick={handleAction(() => startRename(board))}
                      >
                        <Icon name="edit" size={12} />
                        Renomear
                      </button>
                      {boards.length > 1 && (
                        <button
                          className="board-tab__menu-item board-tab__menu-item--danger"
                          onClick={handleAction(() => onDelete(board.id, board.title))}
                        >
                          <Icon name="trash" size={12} />
                          Excluir
                        </button>
                      )}
                    </div>,
                    document.body
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ))}

      <button className="board-tab board-tab--add" onClick={onAdd} aria-label="Criar nova aba" title="Nova aba">
        <Icon name="plus" size={14} />
      </button>
    </nav>
  );
}
