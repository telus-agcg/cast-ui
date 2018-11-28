# TKXS Component Library

## Development

This project is configured to run in Docker containers facilitated by `docker-compose`. [nib](https://github.com/technekes/nib) is our tool of choice for interacting with `docker-compose` in development.

### Running the app

Use [nib](https://github.com/technekes/nib) to build and start up the node server. To optimize `npm install` this project is using a volume for `node_modules`. To initialize `node_modules`, run `nib setup web`.

```sh
nib build --pull
nib setup web
nib up web
```

Visit [http://localhost:6006/](http://localhost:6006/) to view the app.

### Linting

Ideally you have lint integration setup in you editor (Vim, VSCode etc). If not or for mass lint checks run.

```sh
# TODO
nib run web npm lint
```
