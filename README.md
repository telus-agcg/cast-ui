# TAC Component Library

[Component Documentation](https://telus-agcg.github.io/cast-ui/)

## Usage

### Installation

The library depends on [styled-components](https://www.styled-components.com/)
as well as React.

To install with all peer dependencies:

```
npm install @tkxs/cast-ui styled-components react react-dom --save
```

or

```
yarn add @tkxs/cast-ui styled-components react react-dom
```

The package includes UMD (`/lib-umd`), CommonJS (`/lib-cjs`), and ES5 modules (`/lib-esm`).
Type definitions are included with CommonJS and ES5 modules.

### Components

Components in this library must receive a theme object as
[documented](https://telus-agcg.github.io/cast-ui/). To achieve this,
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

### Running Cast Locally

```sh
git checkout beta
npm i
npm run start
```

Visit [http://localhost:6006/](http://localhost:6006/) to view the app.

### Cast Development Workflow

Cast uses [semantic-release](https://github.com/semantic-release/semantic-release)
to manage versions and releases. The `master` branch automatically deploys a release
where versioning is calculated based on commits since the last git tag.

#### Commit Formatting

These commits **must** follow the default
[Angular commit conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).
Commitizen is available to assist in constructing commits with the appropriate format.
To use this, run `yarn commit` or `npm run commit` instead of `git commit`. This will
walk through a series of questions to build the right commit meessage. When PRs are
squashed, the title of the PR is used as the header.

#### Branches

We currently use two main branches for releases:

- `beta` is a pre-release branch
- `master` is the production branch

Commits on these branches will trigger new releases.

When starting a new feature or bugfix, create a branch from `beta`. This will add your
work to the collection of work going out in the next release and allow for a beta release
to be tested by QA and other teams before going out in production.

Example branch names:

- `fix(select): update select border`
- `feat(button): add new prop`
- `BREAKING CHANGE: remove a certain prop from all components`

**Note: a space after the `:` is necessary for the build to work**

#### Local Testing

Local testing should be covered by the developer. To test locally, follow these steps:

In `cast-ui`:

1. Branch from `beta` using the above conventions
2. Make changes
3. Change version number in `package.json`
4. `npm run build`
5. `npm pack` => creates a `.tgz` file in the project

In project using the package:

1. `npm uninstall @tkxs/cast-ui`
2. `npm install path/to/pacakage.tgz`
3. Test changes thoroughly

Suggestion: Since the `.tgz` files create clutter over time, create a script to create the pack,
move it somewhere you can clean up later, and copy the path to your clipboard.

When the developer is confident in the work, a PR should be opened against `beta` for approval.

#### Releases

When merging to `beta`:

- The feature branch should be **squashed** with a single commit message that follows the commit conventions above. This helps keeps sanity when looking at the commit history.
- The single commit should represent the most impactful change. For example, if 3 commits (a `fix`, `feat`, and a `BREAKING CHANGE`) get squashed to one, the prefix should be `BREAKING CHANGE`. Or if 2 commits (a `fix` and `feat`) get squashed, the prefix should be `feat`.
- **If the single commit does not contain a prefix, the build will fail and no beta release will be created.**

When merging from `beta` to `master`:

- `beta` should be merged into `master`, not squashed, preserving the commits.

### Linting

Ideally you have lint integration setup in you editor (Vim, VSCode etc).
If not or for mass lint checks run.

```sh
npm run lint
```
