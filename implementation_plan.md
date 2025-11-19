# Implementation Plan

## [Overview]
Create a new SplitButton component that combines a primary action button with a dropdown menu for secondary actions, similar to Gmail's "Send" button and Google Drive's "Share" button.

The component will be built as a composite component using the existing Button and Menu components as building blocks. It will feature two distinct clickable zones: a main area for the primary action and a dropdown arrow for accessing secondary actions. The component will support all existing button variants (primary, secondary, success, warning, danger) and sizes (sm, md, lg) to maintain consistency with the Cast UI design system.

## [Types]
Define TypeScript interfaces for the SplitButton component props and menu items.

```typescript
export interface SplitButtonProps extends Omit<ButtonProps, 'displayType' | 'onClick'> {
  /**
   * The primary action text displayed on the main button
   */
  children: React.ReactNode;
  
  /**
   * Callback triggered when the primary button is clicked
   */
  onPrimaryClick: (e: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Array of menu items for secondary actions
   */
  menuItems: MenuItem[];
  
  /**
   * Callback triggered when a menu item is clicked
   */
  onMenuItemClick?: (item: MenuItem, e: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Button style variant
   * @default 'primary'
   */
  btnStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /**
   * Button size
   * @default 'md'
   */
  btnSize?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in outline mode
   * @default false
   */
  outline?: boolean;
  
  /**
   * Theme object
   */
  theme?: any;
  
  /**
   * Specifies the parent element for rendering the Menu Popover
   */
  appendTo?: TippyProps['appendTo'];
}
```

## [Files]
Specify all file operations needed for the implementation.

**New Files to Create:**
- `src/SplitButton/SplitButton.component.tsx` - Main component implementation
- `src/SplitButton/SplitButton.stories.tsx` - Storybook stories for documentation and testing

**Existing Files to Modify:**
- `src/main.ts` - Add SplitButton export statements to expose the component in the library's public API

**No Files to Delete or Move**

## [Functions]
Detail the functions and methods to be implemented.

**New Functions in SplitButton.component.tsx:**

1. `SplitButton` (Main Component Function)
   - **Signature:** `export const SplitButton: React.FC<SplitButtonProps>`
   - **Purpose:** Main component that renders the split button UI
   - **Implementation Details:**
     - Apply default props using `getPropsWithDefaults`
     - Destructure props for primary button and menu configuration
     - Render two styled buttons within a container
     - Integrate Menu component for dropdown functionality
     - Handle disabled state for both buttons
     - Apply ThemeProvider for consistent theming

**No Existing Functions to Modify**

**No Functions to Remove**

## [Classes]
Specify styled components and their styling logic.

**New Styled Components:**

1. `SSplitButtonContainer`
   - **Purpose:** Wrapper container that holds both button parts
   - **Styling:** 
     - `display: inline-flex`
     - `position: relative`
     - Border radius management to create seamless appearance

2. `SPrimaryButton`
   - **Purpose:** Styled button for the primary action
   - **Extends:** `SButton` from Button component
   - **Styling:**
     - Remove right border radius to connect with dropdown
     - Maintain all standard button styling
     - Add right border to separate from dropdown section

3. `SDropdownButton`
   - **Purpose:** Styled button for the dropdown trigger
   - **Extends:** `SButton` from Button component  
   - **Styling:**
     - Remove left border radius to connect with primary button
     - Minimal padding (just enough for the icon)
     - Remove left border to avoid double border
     - Fixed width based on button size
     - Display flex with centered icon

4. `SDropdownIcon`
   - **Purpose:** Styled dropdown arrow icon
   - **Extends:** `KeyboardArrowDownIcon`
   - **Styling:**
     - Appropriate sizing based on btnSize prop
     - Color inheritance from button

**No Existing Classes to Modify**

**No Classes to Remove**

## [Dependencies]
List all dependency requirements and imports.

**New Imports for SplitButton.component.tsx:**
```typescript
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, ButtonProps } from '../Button/Button.component';
import { Menu, MenuItem } from '../Menu/Menu.component';
import { KeyboardArrowDownIcon } from '@icons';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';
import { TippyProps } from '@tippyjs/react/headless';
```

**New Imports for SplitButton.stories.tsx:**
```typescript
import { Meta, StoryObj } from '@storybook/react-vite';
import { SplitButton } from './SplitButton.component';
```

**No New Package Dependencies Required** - All necessary packages are already in package.json

## [Testing]
Define the testing approach and story requirements.

**Storybook Stories to Create:**

1. **Default Story**
   - Demonstrates basic SplitButton with primary action and secondary menu
   - Primary button text: "Press Me!"
   - Primary action: Browser alert "you pressed me"
   - Menu items: One item labeled "Secondary Actions"
   - Menu action: Browser alert "This is the secondary action"
   - Default styling: primary, medium size

**Story Configuration:**
- Include all argTypes for interactive controls (btnStyle, btnSize, disabled, outline)
- Provide comprehensive description of component usage
- Include action handlers for both primary and menu clicks

**Manual Testing Checklist:**
- Verify primary button triggers correct action
- Verify dropdown button opens menu
- Verify menu items trigger correct actions
- Test all button style variants (primary, secondary, success, warning, danger)
- Test all button sizes (sm, md, lg)
- Test disabled state (both buttons should be disabled)
- Test outline variant
- Verify visual appearance matches Gmail/Google Drive examples
- Test keyboard accessibility
- Test with different menu item configurations

## [Implementation Order]
Numbered sequence of implementation steps to minimize conflicts.

1. **Create SplitButton Component File**
   - Create `src/SplitButton/SplitButton.component.tsx`
   - Define TypeScript interfaces (SplitButtonProps)
   - Set up imports and dependencies

2. **Implement Styled Components**
   - Create `SSplitButtonContainer` for layout
   - Create `SPrimaryButton` with appropriate styling
   - Create `SDropdownButton` with appropriate styling
   - Create `SDropdownIcon` for the arrow

3. **Implement Main Component Logic**
   - Set up default props
   - Implement component render logic
   - Integrate Button components for both sections
   - Integrate Menu component for dropdown
   - Apply ThemeProvider wrapper
   - Handle disabled state properly

4. **Create Storybook Stories**
   - Create `src/SplitButton/SplitButton.stories.tsx`
   - Implement Default story as specified
   - Configure argTypes for interactive controls
   - Add component description

5. **Update Library Exports**
   - Modify `src/main.ts`
   - Add SplitButton component export
   - Add SplitButtonProps type export

6. **Test and Validate**
   - Run Storybook to verify component renders
   - Test all interactive features
   - Verify all button variants and sizes work
   - Test disabled state
   - Verify menu functionality

7. **Final Review**
   - Ensure code follows existing patterns
   - Verify TypeScript types are correct
   - Check that styling matches design requirements
   - Confirm component is properly exported
