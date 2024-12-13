import React from 'react';
import cx from 'clsx';
import RCTable, { VirtualTable } from 'rc-table';
import styles from './Table.module.scss';
import type { TableProps, DataItem } from './types';
import { ColumnType } from 'rc-table';
const Table: React.FC<TableProps> = ({
  data,
  columns,
  rowClassName,
  emptyText,
  virtualized = false,
  border = true,
  ...rest
}) => {
  const modifiedColumns = columns.map((column) => ({
    onCell: () => ({
      'data-title': column.title,
    }),
    ...column,
  })) as ColumnType<DataItem>[];

  return (
    <div
      className={cx(styles.table, {
        [styles.border]: border,
        [styles.empty]: data?.length === 0,
      })}
    >
      {virtualized ? (
        <VirtualTable
          data={data?.map((item, index) => ({
            ...item,
            key: item?.key ?? index,
          }))}
          columns={modifiedColumns}
          tableLayout="fixed"
          className={styles.tableContainer}
          rowClassName={cx(styles.row, {
            [rowClassName as string]: rowClassName,
          })}
          emptyText={emptyText}
          {...rest}
        />
      ) : (
        <RCTable
          data={data?.map((item, index) => ({
            ...item,
            key: item?.key ?? index,
          }))}
          columns={modifiedColumns}
          tableLayout="fixed"
          className={styles.tableContainer}
          rowClassName={cx(styles.row, {
            [rowClassName as string]: rowClassName,
          })}
          emptyText={emptyText}
          {...rest}
        />
      )}
    </div>
  );
};

export default Table;
export { type TableProps };
