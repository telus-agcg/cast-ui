import * as React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Switch, NavLink } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';
import { Breadcrumbs, CrumbRoute, Panel } from '../';

const newHistory = createBrowserHistory();
const Event = (props: any) => (
  <div className="event">
    <h3>{props.name}</h3>
    <p>More information about the {props.name} here ...</p>
  </div>
);

const CastUiButtons = (props: any) => (
  <div className="event">
    <p>More information about the {props.name}!</p>
    <ul className="demo__links">
      <li>
        <NavLink to="/buttons/standard-buttons">Standard Buttons</NavLink>
      </li>
      <li>
        <NavLink to="/buttons/outline-buttons">Outline Buttons</NavLink>
      </li>
    </ul>
    <Switch>
      <CrumbRoute
        title="Cast UI Buttons"
        path="/buttons/standard-buttons"
        render={() => <Event name="Standard Buttons" />}
      />
      <CrumbRoute
        title="Outline Buttons"
        path="/buttons/outline-buttons"
        render={() => <Event name="Outline Buttons" />}
      />
    </Switch>
  </div>
);

storiesOf('Breadcrumb', module).add(
  'Breadcrumb',
  wInfo(`

  ### Notes

  Illustrates collective usage of the Breadcrumb components

  ### Usage
  ~~~js
    <div>
      <Router history={newHistory}>
        <div>
          <Breadcrumbs
            BreadcrumbsContainer="nav"
            BreadcrumbItemContainer="span"
            separator="span"
            breadcrumbDefaultStyle="default"
            breadcrumbActiveStyle="primary"
            breadcrumbSize="md"
          />
          <ul className="demo__links">
            <li>
              <NavLink to="/buttons">Cast UI Buttons</NavLink>
            </li>
          </ul>
          <Switch>
            <CrumbRoute
              title="Cast UI Buttons"
              path="/buttons"
              render={() => <CastUiButtons name="Cast UI Buttons" />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  ~~~`)(() => (
    <div>
      <Router history={newHistory}>
        <div>
          <Panel title="Cast UI Buttons" panelStyle="default">
            <Breadcrumbs
              BreadcrumbsContainer="nav"
              BreadcrumbItemContainer="span"
              separator="span"
              hidden={boolean('hidden', false)}
              breadcrumbDefaultStyle={select(
                'breadcrumbDefaultStyle',
                ['success', 'default', 'primary', 'danger', 'warning'],
                'default',
              )}
              breadcrumbActiveStyle={select(
                'breadcrumActivebStyle',
                ['success', 'default', 'primary', 'danger', 'warning'],
                'primary',
              )}
              breadcrumbSize={select(
                'breadcrumbSize',
                ['sm', 'md', 'lg'],
                'md',
              )}
            />
            <Switch>
              <CrumbRoute
                title="Cast UI Buttons"
                path="/"
                render={() => <CastUiButtons name="Cast UI Buttons" />}
              />
            </Switch>
          </Panel>
        </div>
      </Router>
    </div>
  )),
);
