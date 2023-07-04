import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

function Table() {
  const [data, setData] = useState({});

  useEffect(() => {
    const sse = new EventSource('http://127.0.0.1:5000/data_stream');
    function handleStream(e) {
      console.log(e);
      setData(JSON.parse(e.data));
    }
    sse.onmessage = e => { handleStream(e) };
    sse.onerror = e => {
      sse.close();
    };
    return () => {
      sse.close();
    };
  });

  const columns = React.useMemo(
    () => [
      { Header: 'Strike', accessor: 'strike' },
      { Header: "Call/Put", accessor:'call'},
      { Header: 'Expiry', accessor: 'expiry' },
      { Header: 'OI', accessor: 'data.OI' },
      { Header: 'Change in OI', accessor: 'data.Change_in_oi' },
      { Header: 'Volume', accessor: 'data.volume' },
      { Header: 'IV', accessor: 'data.iv' },
      { Header: 'LTP', accessor: 'data.ltp' },
      { Header: 'Change', accessor: 'data.chnge' },
      { Header: 'Bid Qty', accessor: 'data.bid_qty' },
      { Header: 'Bid', accessor: 'data.bid' },
      { Header: 'Ask', accessor: 'data.ask' },
      { Header: 'Ask Qty', accessor: 'data.ask_qty' },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: Object.values(data) });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Table;
