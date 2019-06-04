import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import intMessages from '../messages';

addLocaleData([...pt, ...en]);
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const messages = intMessages[language] || intMessages.pt;

export { language, messages };
