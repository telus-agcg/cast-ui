import * as React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Switch, NavLink } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
// import { select } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';
import { Breadcrumbs, CrumbRoute } from './';

const newHistory = createBrowserHistory();
const Event = (props: any) => (
  <div className="event">
    <h3>{props.name}</h3>
    <p>More information about the {props.name} here ...</p>
  </div>
);

const CastUiButtons = (props: any) => (
  <div className="event">
    <h3>{props.name}</h3>
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

  Illustrates collective usage of the breadcrumb components

  ### Usage
  ~~~js
    <Route
      {...props}
      render={routeProps => (
        <Breadcrumb
          data={{
            title: 'Home',
            pathname: routeProps.match.url,
            search: includeSearch ? routeProps.location.search : null,
          }}>
          <MyComponent {...routeProps} />
        </Breadcrumb>
      )}
    />
  ~~~`)(() => (
    <div>
      <Router history={newHistory}>
        <div>
          <Breadcrumbs
            BreadcrumbsContainer="nav"
            BreadcrumbItemContainer="span"
            separator="span"
          />
          <ul className="demo__links">
            <li>
              <NavLink to={`/buttons`}>Cast UI Buttons</NavLink>
            </li>
          </ul>
          <Switch>
            <CrumbRoute
              title="Cast UI Buttons"
              path={`/buttons`}
              render={() => <CastUiButtons name="Cast UI Buttons" />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  )),
);
