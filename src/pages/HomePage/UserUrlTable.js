import { useMemo } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const UserUrlTable = ({ userUrls }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Original URL',
        accessor: 'originalUrl',
        minWidth: 400,
      },
      {
        Header: 'Short URL',
        accessor: 'shortenUrl',
        minWidth: 400,
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
        minWidth: 220,
      },
    ],
    []
  );

  return <ReactTable data={userUrls} columns={columns} defaultPageSize={10} />;
};

export default UserUrlTable;
