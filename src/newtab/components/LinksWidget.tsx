import { useEffect, useRef, useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import type { LinkItem, LinksWidget } from '@shared/types';
import { getFaviconUrl } from '@shared/storage';
import { AnyIcon } from './AnyIcon';
import { Icon } from './Icon';

interface LinksWidgetProps {
  widget: LinksWidget;
  onDeleteLink?: (linkId: string) => void;
  onEditLink?: (linkId: string) => void;
}

export function LinksWidgetView({ widget, onDeleteLink, onEditLink }: LinksWidgetProps) {
  return (
    <ul className="links-widget">
      {widget.items.map((link) => (
        <LinkRow
          key={link.id}
          link={link}
          onDelete={onDeleteLink}
          onEdit={onEditLink}
        />
      ))}
    </ul>
  );
}

function LinkRow({
  link,
  onDelete,
  onEdit
}: {
  link: LinkItem;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}) {
  const [imageError, setImageError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const kebabRef = useRef<HTMLButtonElement>(null);
  const favicon = link.favicon && !imageError ? link.favicon : getFaviconUrl(link.url);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        kebabRef.current &&
        !kebabRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const openMenu = () => {
    if (kebabRef.current) {
      const rect = kebabRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 2, right: window.innerWidth - rect.right });
    }
    setMenuOpen(true);
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openMenu();
  };

  const handleKebabClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      openMenu();
    }
  };

  const handleAction = (fn?: (id: string) => void) => (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setMenuOpen(false);
    fn?.(link.id);
  };

  return (
    <li className="links-widget__item" onContextMenu={handleContextMenu}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="links-widget__link"
        aria-label={`Abrir ${link.title}`}
      >
        <span className="links-widget__icon">
          {link.icon ? (
            <AnyIcon name={link.icon} size={16} />
          ) : favicon ? (
            <img
              src={favicon}
              alt=""
              width="18"
              height="18"
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
            />
          ) : (
            <AnyIcon name="fa:link" size={14} />
          )}
        </span>
        <span className="links-widget__text">{link.title}</span>
      </a>
      {(onEdit || onDelete) && (
        <div className="links-widget__actions">
          <button
            ref={kebabRef}
            className="links-widget__kebab"
            onClick={handleKebabClick}
            aria-label="Ações do link"
            title="Ações"
          >
            <Icon name="more-vertical" size={14} />
          </button>
          {menuOpen && createPortal(
            <div
              ref={menuRef}
              className="links-widget__menu"
              style={{ position: 'fixed', top: menuPos.top, right: menuPos.right }}
            >
              {onEdit && (
                <button
                  className="links-widget__menu-item"
                  onClick={handleAction(onEdit)}
                >
                  <Icon name="edit" size={14} />
                  Editar
                </button>
              )}
              {onDelete && (
                <button
                  className="links-widget__menu-item links-widget__menu-item--danger"
                  onClick={handleAction(onDelete)}
                >
                  <Icon name="trash" size={14} />
                  Excluir
                </button>
              )}
            </div>,
            document.body
          )}
        </div>
      )}
    </li>
  );
}
