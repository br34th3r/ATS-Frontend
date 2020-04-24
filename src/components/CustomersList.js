import React from 'react'
import {  TableContainer,
          Table,
          TableHead,
          TableRow,
          TableBody,
          TableCell,
          Paper } from '@material-ui/core';

class CustomersList extends React.Component {
  render() {
    return (
     <TableContainer component={Paper}>
       <Table className={this.props.classes.table} aria-label="Customers Table">
         <TableHead>
           <TableRow>
             <TableCell>Name</TableCell>
             <TableCell align="right">Surname</TableCell>
             <TableCell align="right">Alias</TableCell>
             <TableCell align="right">Discount Status</TableCell>
             <TableCell align="right">Customer Type</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           { this.props.customers.map((customer) => (
             <TableRow key={customer._id}>
               <TableCell scope="row">
                 {customer.name}
               </TableCell>
               <TableCell align="right">{customer.surname}</TableCell>
               <TableCell align="right">{customer.alias}</TableCell>
               <TableCell align="right">{customer.discountStatus}</TableCell>
               <TableCell align="right">{customer.discountStatus !== "NONE" ? "VALUED" : "REGULAR"}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
    )}
  }

export default CustomersList
