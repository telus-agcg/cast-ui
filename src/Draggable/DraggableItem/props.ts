export type DraggableItemProps = {
  /**
   * Set a className option
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select Draggable style
   *
   * @default 'primary'
   **/
  draggablestyle?: string;
  /**
   * Select DraggableItem color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable Item borders' color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  bordercolor?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  guttersize?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
