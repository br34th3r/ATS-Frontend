import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class FromToSelect extends Component {
  render() {
    return (
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="from-select"
              name="from"
              placeholder="From"
              onChange={this.props.onChange}
              className={this.props.className}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="to-select"
              name="to"
              placeholder="Destination"
              onChange={this.props.onChange}
              className={this.props.className}
            />
          </Grid>
        </Grid>
      </FormControl>
    )
  }
}

export default FromToSelect;
