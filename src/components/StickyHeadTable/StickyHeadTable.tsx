import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

interface Column {
  id:
    | 'number'
    | 'operationId'
    | 'chainId'
    | 'createdAt'
    | 'initiator'
    | 'node'
    | 'requestId'
    | 'eventType'
    | 'description';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'number', label: '№', minWidth: 70 },
  { id: 'createdAt', label: 'Время создания', minWidth: 100 },
  { id: 'operationId', label: 'Идентификатор операции', minWidth: 170 },
  { id: 'chainId', label: 'Идентификатор цепочки', minWidth: 70 },
  {
    id: 'initiator',
    label: 'initiator',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'node',
    label: 'Узел',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'requestId',
    label: 'Идентификатор запроса',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'eventType',
    label: 'Тип события',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'description',
    label: 'Описание',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  number: string;
  createdAt: string;
  operationId: string;
  chainId: string;
  initiator: string;
  node: number;
  requestId: number;
  eventType: number;
  description: number;
}

function createData(
  number: string,
  createdAt: string,
  chainId: string,
  population: number,
  size: number,
): Data {
  return {
    number,
    createdAt,
    operationId: 'operationId',
    chainId,
    initiator: 'initiator',
    node: 5,
    requestId: Math.random(),
    eventType: Math.random(),
    description: Math.random(),
  };
}

const rows = [
  createData('1', 'India', 'IN', 1324171354, 3287263),
  createData('2', 'Italy', 'IT', 60483973, 301340),
  createData('3', 'China', 'CN', 1403500365, 9596961),
  createData('4', 'United States', 'US', 327167434, 9833520),
  createData('5', 'Canada', 'CA', 37602103, 9984670),
  createData('6', 'Australia', 'AU', 25475400, 7692024),
  createData('7', 'Germany', 'DE', 83019200, 357578),
  createData('8', 'Ireland', 'IE', 4857000, 70273),
  createData('9', 'Mexico', 'MX', 126577691, 1972550),
  createData('10', 'Japan', 'JP', 126317000, 377973),
  createData('11', 'France', 'FR', 67022000, 640679),
  createData('12', 'United Kingdom', 'GB', 67545757, 242495),
  createData('13', 'Russia', 'RU', 146793744, 17098246),
  createData('14', 'Nigeria', 'NG', 200962417, 923768),
  createData('15', 'Brazil', 'BR', 210147125, 8515767),
];

export const StickyHeadTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 15rem)' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.chainId}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Строк на странице"
      />
    </Paper>
  );
};
