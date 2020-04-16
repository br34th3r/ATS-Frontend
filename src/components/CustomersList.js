import React from 'react'

class CustomersList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Alias</th>
            <th>Discount Status</th>
            <th>Customer Type</th>
          </tr>
        </thead>
        <tbody>
          {this.props.customers.map(customer => {
            return (
              <tr key={ customer._id }>
                <td>{ customer.name }</td>
                <td>{ customer.surname }</td>
                <td>{ customer.email }</td>
                <td>{ customer.alias }</td>
                <td>{ customer.discountStatus }</td>
                <td>{ customer.discountStatus !== "NONE" ? "VALUED" : "REGULAR" }</td>
              </tr>
            )
          })}
        </tbody>
     </table>
    );}
  }

export default CustomersList
