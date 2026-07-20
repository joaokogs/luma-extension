export type IconName = 'plus' | 'edit' | 'trash' | 'close' | 'external' | 'settings' | 'menu';

const ICONS: Record<IconName, string> = {
  plus: 'M12 5v14M5 12h14',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  trash: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  close: 'M18 6L6 18M6 6l12 12',
  external: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v-6m0 6H9m3 0h3M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m20 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42',
  menu: 'M4 6h16M4 12h16M4 18h16',
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className = '' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}
