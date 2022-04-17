import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import "./style.css"

export function ScheduleCard({name, days}) {
  return (
        <>
            <TableRow 
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">
                        {days.map( (dataItem,index) => {
                        return (<div className='card_days' key={`${index}`} {...dataItem}>{dataItem.day}</div>)
                        })}

              </TableCell>
              <TableCell align="right">
                {days.map( (dataItem,index) => {
                return (<div className="card_data" key={`${index}`} {...dataItem}>{dataItem.dailyaffairs.map((e, key) => (<div key={key}>{e.time}</div>))}</div>)
                })}
              </TableCell>
              <TableCell align="right">
                {days.map( (dataItem,index) => {
                return (<div className="card_data" key={`${index}`} {...dataItem}>{dataItem.dailyaffairs.map((e, key) => (<div key={key}>{e.occupation}</div>))}</div>)
                })}
              </TableCell>
              <TableCell align="right">{days.monday}</TableCell>
            </TableRow>
        </>
  );
}


