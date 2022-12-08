import React from 'react';
import { withTheme } from 'styled-components';
import Tooltip from '../Tooltip';

const Color = withTheme<any>(({ theme: { colors } }: any) =>
  Object.keys(colors).map((key) => (
    <Tooltip
      key={key}
      content={colors[key].toUpperCase()}
      placement="top-start"
    >
      <div
        key={key}
        style={{
          display: 'flex',
          width: '24%',
          marginBottom: 12,
          fontSize: '.8em',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: 52, backgroundColor: colors[key] }}>
          <div
            style={{ backgroundColor: 'white' }}
          >{`${key[0].toUpperCase()}${key.substring(1)} - ${colors[
            key
          ].toUpperCase()}`}</div>
        </div>
      </div>
    </Tooltip>
  )),
);

export default {
  title: 'Components/Typography/Colors',
  parameters: {
    docs: {
      description: {
        component: 'These are the available colors',
      },
    },
  },
};

export const Colors = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    <Color />
  </div>
);
