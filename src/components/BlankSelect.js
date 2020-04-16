import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BlankTypeSelect from './BlankTypeSelect';

class BlankSelect extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl>
            <BlankTypeSelect
              onChange={this.props.onChange}
              blankType="101"
            />
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl>
            <TextField
              id="blank-number-select"
              name="blankNumber"
              onChange={this.props.onChange}
              placeholder="Blank Number"
            />
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default BlankSelect;
