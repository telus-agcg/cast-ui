# Styled System Integration

This document explains how to use the styled system implementation in the Cast UI component library.

## Overview

The styled system provides a consistent, type-safe way to style components with responsive design capabilities. It includes:

- **Systematic spacing** using a predefined scale
- **Responsive breakpoints** for mobile-first design
- **Typography scale** for consistent text sizing
- **Color palette** from your theme
- **Layout utilities** (Box, Flex, Grid)

## Core Concepts

### Spacing Scale

The spacing scale uses array indices to reference predefined values:

```typescript
// Theme spacing scale
space: [
  '0px', // 0
  '4px', // 1
  '8px', // 2
  '12px', // 3
  '16px', // 4
  '24px', // 5
  '32px', // 6
  '48px', // 7
  '64px', // 8
];
```

### Responsive Design

Use arrays to define responsive values:

```jsx
// Mobile-first responsive design
<Box
  width={['100%', '50%', '25%']} // 100% mobile, 50% tablet, 25% desktop
  p={[2, 3, 4]} // 8px, 12px, 16px padding
/>
```

### Breakpoints

```typescript
breakpoints: ['768px', '1024px', '1366px'];
// [0] = mobile (default)
// [1] = tablet (≥768px)
// [2] = desktop (≥1024px)
// [3] = large desktop (≥1366px)
```

## Layout Components

### Box

The fundamental layout component that provides access to all styled-system props:

```jsx
import { Box } from '@tkxs/cast-ui';

<Box
  p={4} // Padding: 16px
  m={[2, 3]} // Margin: 8px mobile, 12px tablet+
  bg="primary" // Background color from theme
  color="white" // Text color
  borderRadius="md" // Border radius from theme
  width={['100%', '50%']} // Responsive width
>
  Content
</Box>;
```

### Flex

Flexbox layout with convenient shorthand props:

```jsx
import { Flex } from '@tkxs/cast-ui';

<Flex
  direction={['column', 'row']} // Column on mobile, row on tablet+
  justify="space-between" // Justify content
  align="center" // Align items
  gap={3} // Gap between items: 12px
  wrap="wrap" // Flex wrap
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Flex>;
```

### Grid

CSS Grid layout with responsive capabilities:

```jsx
import { Grid } from '@tkxs/cast-ui';

<Grid
  templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']} // Responsive columns
  gap={4} // Grid gap: 16px
  autoFlow="row" // Grid auto flow
>
  <Box>Grid Item 1</Box>
  <Box>Grid Item 2</Box>
  <Box>Grid Item 3</Box>
</Grid>;
```

## Styled System Props

All layout components support these prop categories:

### Space Props

- `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` - Margin
- `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` - Padding

### Layout Props

- `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
- `display`, `overflow`, `verticalAlign`

### Color Props

- `color` - Text color
- `bg`, `backgroundColor` - Background color
- `opacity`

### Border Props

- `border`, `borderColor`, `borderRadius`, `borderWidth`
- `borderTop`, `borderRight`, `borderBottom`, `borderLeft`

### Typography Props

- `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`
- `textAlign`, `fontStyle`, `fontFamily`

### Flexbox Props

- `alignItems`, `justifyContent`, `flexDirection`, `flexWrap`
- `flex`, `flexGrow`, `flexShrink`, `flexBasis`
- `alignSelf`, `justifySelf`, `order`

### Position Props

- `position`, `zIndex`, `top`, `right`, `bottom`, `left`

### Shadow Props

- `boxShadow`, `textShadow`

## Common Patterns

### Centered Content

```jsx
<Flex justify="center" align="center" height="100vh">
  <Box>Centered content</Box>
</Flex>
```

### Responsive Card Grid

```jsx
<Grid templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']} gap={4}>
  {items.map((item) => (
    <Box key={item.id} bg="white" p={4} borderRadius="md" boxShadow="sm">
      {item.content}
    </Box>
  ))}
</Grid>
```

### Sidebar Layout

```jsx
<Grid templateColumns={['1fr', '200px 1fr']} gap={4}>
  <Box bg="gray.100" p={4}>
    Sidebar
  </Box>
  <Box p={4}>Main content</Box>
</Grid>
```

### Responsive Stack

```jsx
<Flex direction={['column', 'row']} gap={4}>
  <Box flex="1">Content 1</Box>
  <Box flex="1">Content 2</Box>
</Flex>
```

## Typography Scale

```jsx
<Box fontSize={0}>10px text</Box>
<Box fontSize={1}>12px text</Box>
<Box fontSize={2}>14px text</Box>
<Box fontSize={3}>16px text</Box>
<Box fontSize={4}>18px text</Box>
<Box fontSize={5}>20px text</Box>
<Box fontSize={6}>24px text</Box>
<Box fontSize={7}>32px text</Box>
<Box fontSize={8}>48px text</Box>
```

## Color Usage

```jsx
// Theme colors
<Box bg="primary" color="white">Primary background</Box>
<Box bg="success" color="white">Success background</Box>
<Box bg="danger" color="white">Danger background</Box>
<Box bg="warning" color="white">Warning background</Box>

// Custom colors
<Box bg="#ff0000" color="#ffffff">Custom colors</Box>
```

## Best Practices

1. **Use the spacing scale**: Always use scale values instead of arbitrary pixel values
2. **Mobile-first**: Design for mobile first, then enhance for larger screens
3. **Consistent breakpoints**: Use the theme breakpoints for consistency
4. **Semantic colors**: Use theme colors instead of hardcoded values
5. **Component composition**: Build complex layouts by composing simple components

## Migration from Existing Components

To migrate existing components to use the styled system:

1. Replace custom spacing with scale values
2. Use responsive arrays for breakpoint-specific styles
3. Replace flexbox/grid CSS with layout components
4. Use theme colors instead of hardcoded values

```jsx
// Before
<div style={{
  padding: '16px 24px',
  margin: '8px 0',
  backgroundColor: '#007bff',
  display: 'flex',
  justifyContent: 'space-between'
}}>

// After
<Flex
  p={[4, 5]}              // 16px mobile, 24px tablet+
  my={2}                  // 8px vertical margin
  bg="primary"            // Theme primary color
  justify="space-between"
>
```

## Type Safety

The styled system is fully typed, providing:

- IntelliSense for all props
- Type checking for responsive values
- Theme-aware color and spacing suggestions
- Compile-time error checking

```typescript
// TypeScript will catch errors
<Box
  p="invalid" // ❌ Error: should be number or array
  fontSize={99} // ❌ Error: index out of bounds
  bg="nonexistent" // ❌ Error: color not in theme
/>
```

This styled system provides a powerful, flexible, and type-safe foundation for building responsive, consistent user interfaces.
