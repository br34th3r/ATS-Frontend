import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

class CardDetailsInput extends Component {
  state = {
    selectedDate: new Date()
  }

  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = event => {
    console.log(event);
    this.setState({
      selectedDate: event
    })
  }

  render() {
    if(this.props.paymentMethod === "CARD") {
      return (
        <>
          <FormControl>
            <TextField
              id="card-number-select"
              name="cardNumber"
              placeholder="Card Number"
              onChange={this.props.onChange}
            />
          </FormControl><br />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl>
                <br /><TextField
                  id="cvc-select"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.props.onChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    views={["year", "month"]}
                    label="Expiry Date"
                    minDate={Date.now()}
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
          </Grid><br />
          <FormControl>
            <TextField
              id="card-issuer-select"
              name="cardIssuer"
              placeholder="Card Issuer"
              onChange={this.props.onChange}
            />
          </FormControl>
        </>
      )
    } else {
      return null;
    }
  }
}

export default CardDetailsInput;
