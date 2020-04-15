import React from 'react'

class CustomersList extends React.Component {
  constructor() {
    super()
    this.state = { customers: [] }
  }

  componentDidMount() {
    var myRequest = new Request(`http://localhost:80/customers`);

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        this.setState({ customers: data })
      })
  }

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
          </tr>
        </thead>
        <tbody>
          {this.state.customers.map(customer => {
            return (
              <tr key={ customer._id }>
                <td>{ customer.name }</td>
                <td>{ customer.surname }</td>
                <td>{ customer.email }</td>
                <td>{ customer.alias }</td>
                <td>{ customer.discountStatus}</td>
              </tr>
            )
          })}
        </tbody>
     </table>
    );}
  }

export default CustomersList