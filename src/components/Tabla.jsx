import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'provincia', label: 'Provincia', minWidth: 150 },
//   { id: 'municipalidad', label: 'Municipalidad', minWidth: 150 },
//   { id: 'barrio_ciudad', label: 'Ciudad / Barrio', minWidth: 150 },
  {
    id: 'confirmados',
    label: 'Confirmados',
    minWidth: 150,
    align: 'center'
  },
  {
    id: 'fallecidos',
    label: 'Fallecidos',
    minWidth: 150,
    align: 'center'
  },
//   {
//     id: 'recuperados',
//     label: 'Recuperados',
//     minWidth: 170,
//     align: 'center'
//   },
];

function createData(provincia, municipalidad, barrio_ciudad, confirmados, fallecidos, recuperados) {
  return { provincia, municipalidad, barrio_ciudad, confirmados, fallecidos, recuperados };
}

const rows = [
  createData('CABA', '', '', 197, 3, 25),
  createData('Buenos Aires', '', '', 158, 2, 1),
  createData('Chaco', '', '', 56, 3, 0),
  createData('Córdoba', '', '', 52, 0, 0),
  createData('Tierra del Fuego', '', '', 14, 0, 0),
  createData('Entre Ríos', '', '', 6, 0, 0),
  createData('Río Negro', '', '', 4, 0, 1),
  createData('Neuquén', '', '', 7, 0, 0),
  createData('Santa Fe', '', '', 54, 0, 0),
  createData('Mendoza', '', '', 7, 0, 0),
  createData('San Luis', '', '', 6, 0, 0),
  createData('Santiago del Estero', '', '', 1, 0, 0),
  createData('Corrientes', '', '', 1, 0, 0),
  createData('Tucumán', '', '', 9, 0, 0),
  createData('Santa Cruz', '', '', 9, 0, 0),
  createData('Corrientes', '', '', 3, 0, 0),
  createData('Salta', '', '', 1, 0, 0),
  createData('Jujuy', '', '', 3, 0, 0),
  createData('La Pampa', '', '', 1, 0, 0),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
//   table_head: {
//       backgroundColor: 'rgb(34, 34, 34)',
//       color: '#fff'
//   }
});

export default function Tabla() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.table_head}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}