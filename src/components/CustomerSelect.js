import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'

class CustomerSelect extends Component {
  state = {
    customers: [],
    customerID: ""
  }

  constructor(props) {
    super(props)
    this.getCustomers = this.getCustomers.bind(this)
  }

  componentDidMount() {
    this.getCustomers()
  }

  changeSelected = event => {
    this.props.onChange(event)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async getCustomers() {
		fetch(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/customers`)
		.then(res => res.json())
		.then(json => {
			this.setState({
				customers: json.customers
			})
		})
		.catch(err => console.log(err))
	}

  render() {
    return (
      <FormControl>
        <InputLabel id="customer-select-label">Customer</InputLabel>
        <Select
          labelId="customer-select-label"
          id="customer-select"
          name="customerID"
          onChange={this.changeSelected}
          className={this.props.className}
          value={this.state.customerID}
        >
          { this.state.customers.map((customer) => {
            return (<MenuItem key={customer._id} value={customer._id}>{`${customer.name} ${customer.surname} (${customer.alias})`}</MenuItem>)
          })}
        </Select>
      </FormControl>
    )
  }
}

export default CustomerSelect;
