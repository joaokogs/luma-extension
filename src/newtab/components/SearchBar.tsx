import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Icon } from './Icon';
import { SEARCH_ENGINES } from '@shared/types';
import type { SearchEngine } from '@shared/types';

interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  searchEngine: SearchEngine;
  onEngineChange: (engine: SearchEngine) => void;
  onSearch: (query: string) => void;
  recentSearches: string[];
}

export function SearchBar({
  searchQuery,
  onSearchQueryChange,
  searchEngine,
  onEngineChange,
  onSearch,
  recentSearches,
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [engineDropdownOpen, setEngineDropdownOpen] = useState(false);
  const [webSuggestions, setWebSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<number | null>(null);

  const currentEngine = SEARCH_ENGINES.find((e) => e.id === searchEngine);

  const fetchSuggestions = async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || !currentEngine) {
      setWebSuggestions([]);
      return;
    }
    try {
      const url = `${currentEngine.autocomplete}${encodeURIComponent(trimmed)}`;
      const res = await fetch(url);
      if (!res.ok) { setWebSuggestions([]); return; }
      const data = await res.json();
      if (currentEngine.id === 'duckduckgo') {
        setWebSuggestions((data as { phrase: string }[]).map((d) => d.phrase));
      } else {
        setWebSuggestions((data as [string, string[]])[1] || []);
      }
    } catch {
      setWebSuggestions([]);
    }
  };

  const dropdownItems = useMemo(() => {
    const items: { type: 'suggestion' | 'recent'; text: string }[] = [];
    for (const s of webSuggestions) {
      items.push({ type: 'suggestion', text: s });
      if (items.length >= 5) break;
    }
    const remaining = 5 - items.length;
    if (remaining > 0 && !searchQuery.trim()) {
      for (const r of recentSearches) {
        if (!items.some((i) => i.text === r)) {
          items.push({ type: 'recent', text: r });
          if (items.length >= 5) break;
        }
      }
    } else if (remaining > 0) {
      const q = searchQuery.toLowerCase();
      for (const r of recentSearches) {
        if (r.toLowerCase().includes(q) && !items.some((i) => i.text === r)) {
          items.push({ type: 'recent', text: r });
          if (items.length >= 5) break;
        }
      }
    }
    return items;
  }, [webSuggestions, recentSearches, searchQuery]);

  const hasDropdown = open && dropdownItems.length > 0;

  useEffect(() => {
    if (!open && !engineDropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setEngineDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, engineDropdownOpen]);

  useEffect(() => {
    setHighlighted(0);
  }, [dropdownItems.length]);

  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    if (!searchQuery.trim()) {
      setWebSuggestions([]);
      return;
    }
    debounceRef.current = window.setTimeout(() => {
      fetchSuggestions(searchQuery);
    }, 300);
  }, [searchQuery, searchEngine]);

  const handleInput = (val: string) => {
    onSearchQueryChange(val);
    setOpen(true);
  };

  const handleSelect = (text: string) => {
    onSearchQueryChange(text);
    onSearch(text);
    setOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (hasDropdown) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlighted((i) => (i + 1) % dropdownItems.length);
        return;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlighted((i) => (i - 1 + dropdownItems.length) % dropdownItems.length);
        return;
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const item = dropdownItems[highlighted];
        if (item) {
          handleSelect(item.text);
          return;
        }
      } else if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
    }
    if (e.key === 'Enter') {
      onSearch(searchQuery);
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="app-header__search">
      <div className="search-tools">
        <Icon name="search" size={22} className="app-header__search-icon" />
        <button
          className="search-engine-btn"
          onClick={() => setEngineDropdownOpen((s) => !s)}
          aria-label="Alterar buscador"
          title={currentEngine?.name}
        >
          <img
            src={currentEngine?.icon}
            alt=""
            className="search-engine-btn__icon"
          />
        </button>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Pesquisar ou digitar URL..."
        value={searchQuery}
        onInput={(e) => handleInput((e.target as HTMLInputElement).value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setOpen(true)}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={hasDropdown}
        aria-label="Pesquisar ou digitar URL"
      />
      {searchQuery && (
        <button
          className="app-header__clear"
          onClick={() => { onSearchQueryChange(''); setOpen(false); inputRef.current?.focus(); }}
          aria-label="Limpar busca"
        >
          <Icon name="close" size={14} />
        </button>
      )}

      {engineDropdownOpen && (
        <div className="search-engine-dropdown">
          {SEARCH_ENGINES.map((engine) => (
            <button
              key={engine.id}
              className={`search-engine-dropdown__item ${engine.id === searchEngine ? 'search-engine-dropdown__item--active' : ''}`}
              onClick={() => { onEngineChange(engine.id); setEngineDropdownOpen(false); }}
            >
              <img src={engine.icon} alt="" className="search-engine-dropdown__icon" />
              {engine.name}
            </button>
          ))}
        </div>
      )}

      {hasDropdown && (
        <ul className="search-suggestions" role="listbox">
          {dropdownItems.map((item, index) => (
            <li
              key={`${item.type}-${item.text}`}
              className={`search-suggestions__item ${index === highlighted ? 'search-suggestions__item--highlighted' : ''}`}
              onClick={() => handleSelect(item.text)}
              onMouseEnter={() => setHighlighted(index)}
              role="option"
              aria-selected={index === highlighted}
            >
              <Icon
                name={item.type === 'recent' ? 'clock' : 'globe'}
                size={14}
                className="search-suggestions__icon"
              />
              <span className="search-suggestions__text">{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
