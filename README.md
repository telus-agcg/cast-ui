# TKXS Component Library

[Component Documentation](https://technekes.github.io/cast-ui/)

## Usage

### Installation

The library depends on [styled-components](https://www.styled-components.com/)
as well as React.

<!-- There are current dependencies on react-router-dom and redux
in the breadcrumb component that we are working to remove. -->

To install with all peer dependencies:

```
npm install @tkxs/cast-ui styled-components react react-dom react-router-dom redux --save
```

or

```
yarn add @tkxs/cast-ui styled-components react react-dom react-router-dom redux
```

The package includes UMD, CommonJS, and ES5 modules. Type definitions are
included with CommonJS and ES5 modules.

### Components

Components in this library must receive a theme object as
[documented](https://technekes.github.io/cast-ui/). To achieve this,
use the `ThemeProvider`, which is passed on from
[styled-components](https://www.styled-components.com/docs/advanced#theming).
If no theme is provided, components will fall back to a default theme.

```
import React, { Component } from "react";
import logo from "./logo.svg";
import { Button, ThemeProvider, Themes } from "@tkxs/cast-ui";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Themes.defaultTheme}>
        <Button btnStyle="primary">Click for Awesomeness</Button>
      </ThemeProvider>
    );
  }
}

export default App;

```

Import and use the desired component.

```
import { Button } from '@tkxs/cast-ui';
...

const AwesomeButton = () => {
  return (
    <Button btnStyle="success">Click for Awesomeness</Button>
  )
}
```

## Development

This project is configured to run in Docker containers facilitated by
`docker-compose`. [nib](https://github.com/technekes/nib) is our tool of
choice for interacting with `docker-compose` in development.

### Running Storybook

Use [nib](https://github.com/technekes/nib) to build and start up the node
server. To optimize `npm install` this project is using a volume for
`node_modules`. To initialize `node_modules`, run `nib setup web`.

```sh
nib build --pull
nib setup web
nib up web
```

Visit [http://localhost:6006/](http://localhost:6006/) to view the app.

### Linting

Ideally you have lint integration setup in you editor (Vim, VSCode etc).
If not or for mass lint checks run.

```sh
nib run web npm run lint
```
