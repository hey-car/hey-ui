import React, { useMemo } from 'react';
import cn from 'classnames';

import { getColumnClasses } from '../../utils/getColumnClasses';

import { ColumnProps } from './Column.types';

import styles from '../../styles/column.module.css';

function Column({
  Component = 'div',
  children,
  widths,
  className,
  offset = [],
  order = [],
}: ColumnProps): JSX.Element {
  const widthClasses = useMemo(
    () => getColumnClasses(widths, styles),
    [widths],
  );
  const offsetClasses = useMemo(
    () => getColumnClasses(offset, styles, 'offset'),
    [offset],
  );
  const orderClasses = useMemo(
    () => getColumnClasses(order, styles, 'order'),
    [order],
  );

  const classNames = cn(
    styles.column,
    ...widthClasses,
    ...offsetClasses,
    ...orderClasses,
    className,
  );

  return <Component className={classNames}>{children}</Component>;
}

export default Column;
