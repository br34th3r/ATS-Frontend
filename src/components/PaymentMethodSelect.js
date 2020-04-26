import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

class PaymentMethodSelect extends Component {
  state = {
    paymentMethod: "CASH"
  }

  changePaymentMethod = event => {
    this.props.callback(event);
    this.props.onChange(event);
    this.setState({
      paymentMethod: event.target.value
    })
  }

  render() {
    return (
      <>
        <Select
          labelId="payment-method-select-label"
          id="payment-method-select"
          name="paymentMethod"
          className={this.props.className}
          onChange={this.changePaymentMethod}
          value={this.state.paymentMethod}
        >
          <MenuItem value={"CASH"}>Cash</MenuItem>
          <MenuItem value={"CARD"}>Card</MenuItem>
        </Select>
      </>
    )
  }
}

export default PaymentMethodSelect;
