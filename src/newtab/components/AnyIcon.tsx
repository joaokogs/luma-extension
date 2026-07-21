import { getLucideIcon } from './IconMap';

interface AnyIconProps {
  name: string;
  size?: number;
}

export function AnyIcon({ name, size = 20 }: AnyIconProps) {
  const IconComponent = getLucideIcon(name);
  if (!IconComponent) return null;
  return <IconComponent size={size} strokeWidth={2} />;
}

export { getLucideIcon, ICON_PICKER_LIST } from './IconMap';
