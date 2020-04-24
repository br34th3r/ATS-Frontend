import React from 'react'
import {  TableContainer,
          Table,
          TableHead,
          TableRow,
          TableBody,
          TableCell,
          Button,
          Paper } from '@material-ui/core';

class DisplayLatePayments extends React.Component {
  state = {
    latePayments: [],
    errors: ""
  }
  constructor(props) {
    super(props);
    this.getLatePayments = this.getLatePayments.bind(this);
  }

  componentDidMount() {
    this.getLatePayments();
  }

  getLatePayments() {
    fetch(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/getLatePayments`)
    .then(res => res.json())
    .then(json => {
      if (json.errors) {
        this.setState({
          errors: json.errors
        })
      } else {
        this.setState({
          latePayments: json.sales
        })
      }
    })
  }

  render() {
    return (
     <TableContainer component={Paper}>
       <Table className={this.props.classes.table} aria-label="Customers Table">
         <TableHead>
           <TableRow>
             <TableCell>Blank ID</TableCell>
             <TableCell align="right">Customer ID</TableCell>
             <TableCell align="right">Confirm Payment</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           { this.state.latePayments.map((data) => (
             <TableRow key={data._id}>
               <TableCell scope="row">
                 {data.customerName}
               </TableCell>
               <TableCell align="right">{data.blankType}</TableCell>
               <TableCell align="right">{data.blankNumber}</TableCell>
               <TableCell align="right">
                 <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                   {"Pay Now"}
                 </Button>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
    )}
  }

export default DisplayLatePayments
