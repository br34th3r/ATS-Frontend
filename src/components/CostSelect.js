import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

class CostSelect extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl>
            <Input
              id="local-cost"
              name="costLocal"
              placeholder="GBP"
              startAdornment={<InputAdornment position="start">£</InputAdornment>}
              className={this.props.className}
              onChange={this.props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <Input
              id="usd-cost"
              name="costUSD"
              placeholder="USD"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              className={this.props.className}
              onChange={this.props.onChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default CostSelect;
