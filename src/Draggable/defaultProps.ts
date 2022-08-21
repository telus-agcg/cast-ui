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
   * Select DraggableParent color.
   *
   * @default 'lightGray'
   **/
  color?: string;
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
