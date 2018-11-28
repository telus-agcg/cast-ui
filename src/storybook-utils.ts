import { withInfo } from '@storybook/addon-info';
const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#888',
    },
  },
  infoBody: {
    backgroundColor: '#fff',
    padding: '0px 5px',
    lineHeight: '2',
  },
};
export const wInfo = (text: string) =>
  withInfo({ inline: true, source: true, styles: wInfoStyle, text });
