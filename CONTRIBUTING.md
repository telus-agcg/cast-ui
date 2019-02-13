# Contributing to cast-ui

cast-ui is the work of [several contributors](https://github.com/technekes/cast-ui/graphs/contributors). You're encouraged to submit [pull requests](https://github.com/technekes/cast-ui/pulls), [propose features and discuss issues](https://github.com/technekes/cast-ui/issues).

#### Fork the Project

Fork the [project on Github](https://github.com/technekes/cast-ui) and check
out your copy.

```
git clone https://github.com/contributor/cast-ui.git
cd cast-ui
git remote add upstream https://github.com/technekes/cast-ui.git
```

#### Create a Topic Branch

Make sure your fork is up-to-date and create a topic branch for your feature or
bug fix.

```
git checkout master
git pull upstream master
git checkout -b my-feature-branch
```

#### Install dependencies and run the project

We are using NPM as the package manager. Please do not use yarn as it will
cause conflicts.

A docker environment is provided and preferred as a way to maintain
a consistent development environment.

[nib](https://github.com/technekes/nib) can be used in place of docker-compose
to build and start up the node server. To optimize `npm install`,
this project is using a volume for `node_modules`. To initialize `node_modules`,
run `nib setup web`.

```sh
nib build --pull
nib setup web
nib up web
```

Alternatively, you can use your local node environment, but please make sure
that you are using the same setup as described in the
[Dockerfile](https://github.com/technekes/cast-ui/blob/master/Dockerfile).

```
npm install
npm run build
npm run storybook
```

Visit [http://localhost:6006/](http://localhost:6006/) to view the app.

#### Write Code

Implement your feature or bug fix.

There are a couple of ways to view your work in development.

- `nib up web` will start up the storybook environment where you can add/edit stories.
- `nib run web npm run build-dev` will start the typescript compiler in watch
  mode so you can `npm link` cast-ui to another project and develop both simultaneously.

The project uses typescript and style is enforced with
[tslint](https://palantir.github.io/tslint/), run `nib run web npm run lint`
and fix any style issues highlighted.

We use [styled-components](https://www.styled-components.com/) to handle styles.
Please use this approach rather than adding `.css` files.

#### Write Documentation

Document any external behavior in component storybook stories as well as the
[README](README.md) (if the change relates to running or building the project).

#### Update Changelog

Add a line to [CHANGELOG](CHANGELOG.md) under _Next Release_. Make it look
like every other line, including your name and link to your Github account.

#### Commit Changes

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

Writing good commit logs is important. A commit log should describe what
changed and why.

```
git add ...
git commit
```

#### Push

```
git push origin my-feature-branch
```

#### Make a Pull Request

Go to https://github.com/technekes/cast-ui/compare and select your feature
branch. Click the 'Create pull request' button and fill out the form. Pull
requests are usually reviewed within a few days.

#### Rebase

If you've been working on a change for a while, rebase with upstream/master.

```
git fetch upstream
git rebase upstream/master
git push origin my-feature-branch -f
```

#### Update CHANGELOG Again

Update the [CHANGELOG](CHANGELOG.md) with the pull request number. A typical
entry looks as follows.

```
* [#1](https://github.com/technekes/cast-ui/pull/1): Add support for Docker
and CI - [@johnallen3d](https://github.com/johnallen3d).
```

Amend your previous commit and force push the changes.

```
git commit --amend
git push origin my-feature-branch -f
```

#### Check on Your Pull Request

Go back to your pull request after a few minutes and see whether it passed
muster with circleci. Everything should look green, otherwise fix issues
and amend your commit as described above.

#### Be Patient

It's likely that your change will not be merged and that the nitpicky
maintainers will ask you to do more, or fix seemingly benign problems. Hang
in there!

#### Thank You

Please do know that we really appreciate and value your time and work. We love
you, really.
