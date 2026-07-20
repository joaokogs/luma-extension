import { render } from 'preact';
import { Popup } from './Popup';
import './styles.css';

const root = document.getElementById('root');
if (root) {
  render(<Popup />, root);
}
