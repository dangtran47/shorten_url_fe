import { useMemo } from 'react';
import { useTable } from 'react-table';

const UserUrlTable = ({ userUrls }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Original URL',
        accessor: 'originalUrl',
      },
      {
        Header: 'Short URL',
        accessor: 'shortenUrl',
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: userUrls });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserUrlTable;
