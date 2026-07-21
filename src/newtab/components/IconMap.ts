import {
  Star, Heart, Zap, Flame, Crown, Gem, Rocket, Globe, Home, Mail,
  Phone, Camera, Video, Music, Book, Code, Terminal, Database, Cloud,
  Sun, Moon, Bell, Flag, Tag, MapPin, Compass, Briefcase, ShoppingCart,
  CreditCard, DollarSign, Clock, Calendar, User, Cog, Lock, Key,
  Pencil, Trash2, CirclePlus, CircleMinus, CircleCheck, CircleQuestionMark,
  Info, AlertTriangle, Search, Download, Upload, Share2, Link,
  Send, Inbox, MessageSquare, ChartBar, Folder, File, Image, Palette,
  Box, List, LayoutGrid, Pin, FileText, Layers,
  MessageCircle, AtSign, Users, ThumbsUp, Hash, Headphones,
  Pen, Monitor, Smartphone, Apple, type LucideIcon
} from 'lucide-preact';

const iconMap: Record<string, LucideIcon> = {
  star: Star, heart: Heart, bolt: Zap, fire: Flame, crown: Crown,
  gem: Gem, rocket: Rocket, globe: Globe, home: Home, envelope: Mail,
  phone: Phone, camera: Camera, video: Video, music: Music, book: Book,
  code: Code, terminal: Terminal, database: Database, cloud: Cloud,
  sun: Sun, moon: Moon, bell: Bell, flag: Flag, tag: Tag,
  'map-pin': MapPin, compass: Compass, briefcase: Briefcase,
  'shopping-cart': ShoppingCart, 'credit-card': CreditCard,
  'dollar-sign': DollarSign, clock: Clock, calendar: Calendar,
  user: User, cog: Cog, lock: Lock, key: Key, pencil: Pencil,
  trash: Trash2, 'plus-circle': CirclePlus, 'minus-circle': CircleMinus,
  'check-circle': CircleCheck, 'question-circle': CircleQuestionMark,
  'info-circle': Info, 'exclamation-triangle': AlertTriangle,
  search: Search, download: Download, upload: Upload, share: Share2,
  link: Link, 'paper-plane': Send, inbox: Inbox, comment: MessageSquare,
  'chart-bar': ChartBar, folder: Folder, file: File, image: Image,
  palette: Palette, cube: Box, cubes: Box, list: List,
  'th-large': LayoutGrid, thumbtack: Pin,
  'circle-question': CircleQuestionMark, 'rectangle-list': FileText,
  github: Code, twitter: AtSign, youtube: Video, linkedin: Users,
  instagram: Camera, facebook: ThumbsUp, slack: Hash,
  whatsapp: MessageCircle, telegram: Send, discord: Headphones,
  amazon: Box, apple: Apple, windows: Monitor, android: Smartphone,
  reddit: MessageCircle, tiktok: Music, snapchat: Camera,
  pinterest: Link, spotify: Music, medium: Book, dev: Code,
  'stack-overflow': Layers, npm: Box, docker: Box, figma: Pen,
  'x-twitter': AtSign, google: Globe,
};

export const ICON_PICKER_LIST = Object.keys(iconMap).map((key) => ({
  name: key,
  label: key,
  icon: iconMap[key],
}));

export function getLucideIcon(name: string): LucideIcon | undefined {
  const def = name.startsWith('fa:') ? name.slice(3) : name;
  return iconMap[def];
}
