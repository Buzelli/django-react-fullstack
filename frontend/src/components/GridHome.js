import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UseSelector, useSelector } from 'react-redux';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function GridHome() {

  const products = useSelector(state => state.productStore.products)

  return (
    <TableContainer sx={{mt:1, p:1}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#Codigo</TableCell>
            <TableCell align="right">#Name</TableCell>
            <TableCell align="right">#Quantidade</TableCell>
            <TableCell align="right">#Valor unitario</TableCell>
            <TableCell align="right">#Valor total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          products ?
            products.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{1}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
              </TableRow>
            )):
            rows.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{1}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
              </TableRow>
            ))
          
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
