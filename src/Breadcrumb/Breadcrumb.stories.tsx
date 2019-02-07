import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Router } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

import { storiesOf } from '@storybook/react';
// import { select } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';
// import { Breadcrumb, CrumbRoute } from './';
import { Breadcrumbs } from './';

// const newHistory = createBrowserHistory();
// const render = (Root: any) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <Router history={newHistory}>
//         <CrumbRoute title="Index" path="/" component={Root} />
//         <Route
//           render={routeProps => (
//             <Breadcrumb
//               data={{
//                 title: 'Home',
//                 pathname: routeProps.match.url,
//                 search: routeProps.location.search,
//               }}>
//               <div {...routeProps}> My Home Component </div>
//             </Breadcrumb>
//           )}
//         />
//       </Router>
//     </BrowserRouter>,
//     document.getElementById('root'),
//   );
// };
// render(<div>My original Component</div>);

storiesOf('Breadcrumb', module).add(
  'Breadcrumb',
  wInfo(`

  ### Notes

  This is the Breadcrumb component.

  Manually creates a route to be mapped in the breadcrumbs menu.

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
  ~~~`)(() => <div>My Component</div>),
);

storiesOf('Breadcrumb', module).add(
  'CrumbRoute',
  wInfo(`

  ### Notes

  This is the Breadcrumb route mapping component.

  Automatically maps a routes to be mapped in the breadcrumbs menu.

  ### Usage
  ~~~js
    <CrumbRoute
      title="Home"
      path="/home"
      component={MyComponent}
    />
  ~~~`)(() => <span />),
);

storiesOf('Breadcrumb', module).add(
  'Breadcrumbs',
  wInfo(`

  ### Notes

  This is the visual element showing the styled list of breadcrumbs
  as recorded from all mapped routes

  Automatically maps a routes to be mapped in the breadcrumbs menu.

  ### Usage
  ~~~js
    <Breadcrumbs
      BreadcrumbsContainer="nav"
      BreadcrumbItemContainer="span"
      separator="span"
    />
  ~~~`)(() => (
    <Breadcrumbs
      BreadcrumbsContainer="nav"
      BreadcrumbItemContainer="span"
      separator="span"
    />
  )),
);
