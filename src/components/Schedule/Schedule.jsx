import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';
import { ScheduleCard } from "../ScheduleCard/ScheduleCard";
import "./style.css"

export const Schedule = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, minHeight: 0  }} aria-label="simple table" >
        <TableHead>
            <TableRow>
              <TableCell>Кто мы?</TableCell>
              <TableCell align="right">День недели</TableCell>
              <TableCell align="right">Время</TableCell>
              <TableCell align="right">Занятие</TableCell>
            </TableRow>
        </TableHead>
        <TableBody sx={{maxHeight: 1000}}>
            {data.map( (dataItem,index) => {
              return (<ScheduleCard key={`${index}`} {...dataItem}/>)
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
