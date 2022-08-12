export interface PillProps {
  /**
   * The content of the Pill
   */
  children: React.ReactNode;
  /**
   * 	Element before the children.
   */
  leftIcon?: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * The id for testing
   */
  dataTestId?: string;
}
