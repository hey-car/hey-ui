import { ComponentType } from 'react';

export interface PaginationProps {
  /**
   * `className` - additional styles, like color
   */
  className?: string;
  /**
   * `totalPages` - total number of pages
   */
  totalPages: number;
  /**
   * `currentPage` - current page
   */
  currentPage: number;
  /**
   * `url` - Current complete URL of the page
   */
  url?: string;
  /**
   * `scrollToElementId` - To which element ID should we build our URL so auto scroll works?
   */
  scrollToElementId?: string;
  renderItem: (item: IPaginationItem) => void;
}

export enum paginationItemType {
  page,
  ellipsis,
  previous,
  next,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPaginationItem {
  type: paginationItemType;
  label?: string;
  page?: number;
  Component?: ComponentType<any> | string;
{...Component}
}
