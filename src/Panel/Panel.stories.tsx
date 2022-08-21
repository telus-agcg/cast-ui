import * as React from 'react';

import { Panel, PanelHeader, PanelBody, Collapse } from '../';

export default {
  title: 'Components/Data Display/Panel',
  component: Panel,
  subcomponents: {
    Panel,
    PanelHeader,
    PanelBody,
    Collapse,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    panelStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: {
        type: 'select',
      },
    },
    noPadding: {
      control: {
        type: 'boolean',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    withHeader: {
      control: {
        type: 'boolean',
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    toggleItem: {
      action: {
        type: 'clicked',
      },
    },
    withCollapse: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: false,
    },
    iconPosition: {
      options: ['right', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

const _Panel = ({
  name,
  title,
  panelStyle,
  withHeader,
  iconPosition,
  toggleItem,
  isCollapsed,
  withCollapse,
  isOpen,
  ...args
}) => {
  const [openPanel, setOpenPanel] = React.useState(false);

  React.useEffect(() => {
    setOpenPanel(isOpen);
  }, [isOpen]);

  const handleTogglePanel = () => setOpenPanel(!openPanel);

  return (
    <Panel name={name} panelStyle={panelStyle}>
      {withHeader && (
        <PanelHeader
          name={name}
          title={title}
          panelStyle={panelStyle}
          iconPosition={iconPosition}
          isCollapsed={openPanel}
          toggleItem={handleTogglePanel}
        />
      )}
      {withCollapse ? (
        <Collapse isOpen={openPanel}>
          <PanelBody {...args} panelStyle={panelStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </PanelBody>
        </Collapse>
      ) : (
        <PanelBody {...args} panelStyle={panelStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea! Culpa,
          dignissimos dolores! Delectus fugiat numquam doloremque consequuntur
          tempora ipsam excepturi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe, reiciendis culpa incidunt corporis dolorem
          eum ullam totam cum iusto voluptate, maxime modi porro aperiam eveniet
          tempore ea? Quidem, at harum!
        </PanelBody>
      )}
    </Panel>
  );
};

export const _Regular = _Panel.bind({});
_Regular.args = {
  name: 'Blood Group',
  title: 'A- type',
  panelStyle: 'primary',
  withHeader: false,
  withCollapse: false,
  noPadding: false,
};

export const _WithHeader = _Panel.bind({});
_WithHeader.args = {
  name: 'Blood Group',
  title: 'B- type',
  panelStyle: 'primary',
  withHeader: true,
  withCollapse: false,
  noPadding: false,
};

export const _Collapsible = _Panel.bind({});
_Collapsible.args = {
  name: 'Blood Group',
  title: 'O+ type',
  panelStyle: 'primary',
  withHeader: true,
  withCollapse: true,
  isOpen: true,
  noPadding: false,
  iconPosition: 'right',
};
