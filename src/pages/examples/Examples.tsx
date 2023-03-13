import * as React from 'react';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { color } from '@mui/system';
import { styled } from '@mui/material/styles';

function createData(
  name: string,
  gender: string,
  age: number,
  weight: number,
  height: number,
) {
  return { name, gender, age, weight, height };
}

const rows = [
  createData('Tadas Ivanko', "male", 23, 88, 179),
  createData('Jolanta Jurce', 'female', 27, 55, 168),
  createData('Kristina Saldaite', 'female', 22, 54, 174),
  createData('Gitanas Nauseds', 'male', 48, 89, 194),
  createData('Kastis Jasiunas', 'male', 34, 104, 172),
  createData('Ilona Kasciusk', 'female', 24, 68, 162)
];




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Examples = () => {
  return (
    <TableContainer
    sx={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      component='div'
    >
      <Table sx={{ maxWidth: 800, border: '1px solid black' }} size='medium' aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Weight kg</StyledTableCell>
            <StyledTableCell align="center">Height cm</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.gender.toLocaleUpperCase()}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.weight}</TableCell>
              <TableCell align="center">{row.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Examples