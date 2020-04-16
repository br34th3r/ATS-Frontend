import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class CardDetailsInput extends Component {
  render() {
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
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  name="expiryDate"
                  format="MM/yyyy"
                  margin="normal"
                  id="expiry-date-select"
                  label="Expiry Date"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  onChange={this.props.onChange}
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
  }
}

export default CardDetailsInput;
