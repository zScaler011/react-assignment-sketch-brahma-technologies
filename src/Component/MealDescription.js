import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const MealDescription = () => {
  const [mealCategory, setMealCategory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((respose) => setMealCategory(respose.data));
    };
    getData();
  }, []);
  console.log('mealCategory', mealCategory);

  return (
    <div>
      <h1 style={{ paddingLeft: '20px' }}>Meal Details by categories</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">Id</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {mealCategory.length !== 0
              ? mealCategory.categories.map((row) => (
                  <StyledTableRow
                    key={row.idCategory}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.idCategory}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.strCategory}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.strCategoryDescription}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : 'Loading'}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MealDescription;
