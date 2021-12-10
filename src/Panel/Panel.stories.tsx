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
    bodyBackgroundColor: {
      control: {
        type: 'color',
      },
    },
    bodyBorderColor: {
      control: {
        type: 'color',
      },
    },
    headerColor: {
      control: {
        type: 'color',
      },
    },
    headerBackgroundColor: {
      control: {
        type: 'color',
      },
    },
    headerBorderColor: {
      control: {
        type: 'color',
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
  headerColor,
  headerBackgroundColor,
  headerBorderColor,
  iconPosition,
  toggleItem,
  isCollapsed,
  withCollapse,
  isOpen,
  ...args
}) => {
  return (
    <Panel name={name} panelStyle={panelStyle}>
      {withHeader && (
        <PanelHeader
          name={name}
          title={title}
          panelStyle={panelStyle}
          headerColor={headerColor}
          headerBorderColor={headerBorderColor}
          headerBackgroundColor={headerBackgroundColor}
          iconPosition={iconPosition}
        />
      )}
      {withCollapse ? (
        <Collapse isOpen={isOpen}>
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

export const _PlainPanel = _Panel.bind({});
_PlainPanel.args = {
  name: 'Blood Group',
  title: 'A- type',
  panelStyle: 'primary',
  headerColor: 'white',
  withHeader: false,
  withCollapse: false,
  noPadding: false,
};

_PlainPanel.parameters = {
  info: {
    text: `
#### Notes
#### Panel
The Panel component is can be composed of 3 components, **Panel** , **PanelHeader** and **PanelBody**.
It not necessary to include the **PanelHeader**.

##### Basic Panel

By default the Panel, all it does is apply some basic border and padding to contain some content.
            `,
  },
};

export const _PanelWithHeader = _Panel.bind({});
_PanelWithHeader.args = {
  name: 'Blood Group',
  title: 'B- type',
  panelStyle: 'primary',
  headerColor: 'white',
  withHeader: true,
  withCollapse: false,
  headerBackgroundColor: 'secondary',
  noPadding: false,
};

_PanelWithHeader.parameters = {
  info: {
    text: `
#### Notes
##### Panel with Heading
Easily add a heading container to your panel with the **PanelHeader** component. It accepts *title* and *name* props that are used to compose the label shown with the *name* emboldened.

##### Contextual alternatives
Like other components, easily make a panel more meaningful to a particular context by chaginng between the following *panelStyle* s

- primary (default)
- secondary
- success
- warning
- danger

The **PanelHeader** also supports the application of custom text, border and background colors via the *headerColor*, *headerBackgroundColor* and *headerBorderColor* respectively. 

The **PanelBody** also supports the application of custom border and background colors via the *bodyBackgroundColor* and *bodyBorderColor* respectively. 

These props accept CSS color codes or theme color declarations.				
`,
  },
};

export const _PanelCollapsible = _Panel.bind({});
_PanelCollapsible.args = {
  name: 'Blood Group',
  title: 'O+ type',
  panelStyle: 'primary',
  headerColor: 'white',
  withHeader: true,
  withCollapse: true,
  isOpen: true,
  headerBackgroundColor: 'secondary',
  noPadding: false,
  iconPosition: 'right',
};

_PanelCollapsible.parameters = {
  info: {
    text: `
#### Notes

##### Collapsible Panel
A panel can be made collapsible by including all 3 components under the Panel component hierarchy and wrapping the **PanelBody** or any content with the **Collapse** component.

The collapsability of the **PanelBody** can be controlled by managing the **Collapse** component *isOpen* and the **PanelHeader** *isCollapsed* states through their props. This behaviour can be greatly enhanced by passing the state management event to the **PanelHeader** *toogleItem* prop. By doing so, the **PanelHeader** chevron direction will also be appropriately displayed.


        `,
  },
};
