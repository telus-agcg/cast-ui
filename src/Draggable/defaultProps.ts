export type DraggableProps = {
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
  draggableStyle?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   * Select DraggableParent color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color?: string;
  /**
   * Select Draggable Parent borders' color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  borderColor?: string;
  /**
   * Select Draggable Gutters Size
   *
   * @default 'md'
   **/
  gutterSize?: 'sm' | 'md' | 'lg';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
