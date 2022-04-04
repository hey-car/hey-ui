import { create } from '@storybook/theming';

import { version } from '../package.json';

export default create({
  base: 'light',
  colorPrimary: '#0B1F35',
  colorSecondary: '#052962',
  appContentBg: '#fff',
  appBorderColor: 'rgba(11, 31, 53, 0.1)',
  fontBase:'Objektiv',
  fontCode: 'Monaco, Menlo, monospace',
  textColor: '#303030',
  barTextColor: '#6D7986',
  barSelectedColor: '#00846A',
  inputBg: '#fff',
  inputBorder: '#DBDEE1',
  inputTextColor: '#0B1F35',
  brandTitle: `core-components@${version}`,
  brandImage: './images/logo.svg',
});
