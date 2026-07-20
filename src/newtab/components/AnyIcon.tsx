import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import {
  faStar, faHeart, faBolt, faFire, faCrown, faGem,
  faRocket, faGlobe, faHome, faEnvelope, faPhone,
  faCamera, faVideo, faMusic, faBook, faCode,
  faTerminal, faDatabase, faCloud, faSun, faMoon,
  faBell, faFlag, faTag, faMapPin, faCompass,
  faBriefcase, faShoppingCart, faCreditCard, faDollarSign,
  faClock, faCalendar, faUser, faCog, faLock,
  faKey, faPencil, faTrash, faPlusCircle, faMinusCircle,
  faCheckCircle, faQuestionCircle, faInfoCircle, faExclamationTriangle,
  faSearch, faDownload, faUpload, faShare, faLink,
  faPaperPlane, faInbox, faComment, faChartBar, faFolder,
  faFile, faImage, faPalette, faCube, faCubes,
  faList, faThLarge, faThumbtack, faCircleQuestion, faRectangleList
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub, faTwitter, faYoutube, faLinkedin, faInstagram,
  faFacebook, faSlack, faWhatsapp, faTelegram, faDiscord,
  faAmazon, faGoogle, faApple, faWindows, faAndroid,
  faReddit, faTiktok, faSnapchat, faPinterest, faSpotify,
  faMedium, faDev, faStackOverflow, faNpm, faDocker,
  faFigma, faXTwitter
} from '@fortawesome/free-brands-svg-icons';

interface AnyIconProps {
  name: string; // "fa:icon-name" or "icon-name"
  size?: number;
}

const faMap: Record<string, any> = {
  'star': faStar, 'heart': faHeart, 'bolt': faBolt, 'fire': faFire,
  'crown': faCrown, 'gem': faGem, 'rocket': faRocket, 'globe': faGlobe,
  'home': faHome, 'envelope': faEnvelope, 'phone': faPhone,
  'camera': faCamera, 'video': faVideo, 'music': faMusic, 'book': faBook,
  'code': faCode, 'terminal': faTerminal, 'database': faDatabase,
  'cloud': faCloud, 'sun': faSun, 'moon': faMoon, 'bell': faBell,
  'flag': faFlag, 'tag': faTag, 'map-pin': faMapPin, 'compass': faCompass,
  'briefcase': faBriefcase, 'shopping-cart': faShoppingCart,
  'credit-card': faCreditCard, 'dollar-sign': faDollarSign,
  'clock': faClock, 'calendar': faCalendar, 'user': faUser,
  'cog': faCog, 'lock': faLock, 'key': faKey, 'pencil': faPencil,
  'trash': faTrash, 'plus-circle': faPlusCircle, 'minus-circle': faMinusCircle,
  'check-circle': faCheckCircle, 'question-circle': faQuestionCircle,
  'info-circle': faInfoCircle, 'exclamation-triangle': faExclamationTriangle,
  'search': faSearch, 'download': faDownload, 'upload': faUpload,
  'share': faShare, 'link': faLink, 'paper-plane': faPaperPlane,
  'inbox': faInbox, 'comment': faComment, 'chart-bar': faChartBar,
  'folder': faFolder, 'file': faFile, 'image': faImage, 'palette': faPalette,
  'cube': faCube, 'cubes': faCubes, 'list': faList, 'th-large': faThLarge,
  'thumbtack': faThumbtack, 'circle-question': faCircleQuestion,
  'rectangle-list': faRectangleList,
  'github': faGithub, 'twitter': faTwitter, 'youtube': faYoutube,
  'linkedin': faLinkedin, 'instagram': faInstagram, 'facebook': faFacebook,
  'slack': faSlack, 'whatsapp': faWhatsapp, 'telegram': faTelegram,
  'discord': faDiscord, 'amazon': faAmazon, 'google': faGoogle,
  'apple': faApple, 'windows': faWindows, 'android': faAndroid,
  'reddit': faReddit, 'tiktok': faTiktok, 'snapchat': faSnapchat,
  'pinterest': faPinterest, 'spotify': faSpotify, 'medium': faMedium,
  'dev': faDev, 'stack-overflow': faStackOverflow, 'npm': faNpm,
  'docker': faDocker, 'figma': faFigma, 'x-twitter': faXTwitter
};

export function AnyIcon({ name, size = 20 }: AnyIconProps) {
  const def = name.startsWith('fa:') ? name.slice(3) : name;
  return <FaIconRaw def={def} size={size} />;
}

function FaIconRaw({ def, size }: { def: string; size: number }) {
  const found = faMap[def];
  if (!found) return null;
  const rendered = faIcon(found);
  if (!rendered) return null;
  const w = rendered.icon[0];
  const h = rendered.icon[1];
  const paths = Array.isArray(rendered.icon[4]) ? rendered.icon[4] : [rendered.icon[4]];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${w} ${h}`} fill="currentColor" aria-hidden="true">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

export const ICON_PICKER_LIST = Object.keys(faMap).map((key) => ({
  name: `fa:${key}`,
  label: key
}));
