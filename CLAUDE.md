# CLAUDE.md

React component library for the TKXS design system (`@tkxs/cast-ui`).

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — type-check (`tsc -b`) then build library with Vite
- `npm run lint` — ESLint
- `npm start` — Storybook dev server (port 6006)
- `npm run build-static` — build lib + static Storybook

No test script is currently configured.

## Structure

- `src/<ComponentName>/` — one directory per component (e.g. `Button`, `Modal`, `Select`)
- Components are styled with `styled-components`
- Storybook stories live alongside components

## Components

Grouped as in Storybook (`Components/<group>/...`):

- **Data Display**: Badge, Card, Collapse, CollapsiblePanel, ListGroup, Modal, Panel, Popover, ProgressBar, Tooltip
- **Feedback**: Alert, Skeleton, Spinner
- **Icons**: Icons
- **Interactions**: Button, CastCheckbox, Checkbox, DatePicker, FileUpload, HeadlessPopover, Input, InputGroup, Menu, RadioButton, RadioButtonGroup, Select, SplitButton, Textarea, Toggle
- **Navigation**: Navbar, Pagination, Sidenav, Tabnav, Tabs
- **Typography**: Typography (Caption, Display, ErrorMessage, Header, TextDisplay, Title)

## Notes

- Releases are automated via `semantic-release` (see `.github/workflows/`)
- Peer deps: React 16–19, `styled-components` ^6
