import React from 'react';
import Icon from 'react-icons-kit';
import { ic_content_copy as ICopy } from 'react-icons-kit/md/ic_content_copy';
import { withTheme } from 'styled-components';
import { CopyToClipboard } from '../CopyToClipboard';
import Tooltip from '../Tooltip';

const Color = withTheme<any>(({ theme: { colors } }: any) =>
  Object.keys(colors).map(key => (
    <Tooltip
      key={key}
      content={colors[key].toUpperCase()}
      placement="top-start"
    >
      <div
        key={key}
        style={{
          display: 'flex',
          width: '32%',
          marginBottom: 12,
          fontSize: '.8em',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: 52, backgroundColor: colors[key] }} />
        <div style={{ flex: 1 }}>
          <CopyToClipboard
            copyContainerClass="copy-container"
            copyContent={`${key[0].toUpperCase()}${key.substring(1)}`}
            copyButtonContent={<Icon size={16} icon={ICopy} />}
            copyButtonClass="copy-button"
            fullWidth
            includeCopyButton={true}
          />
        </div>
      </div>
    </Tooltip>
  )),
);

export default {
  title: 'Components/General/Colors',
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
