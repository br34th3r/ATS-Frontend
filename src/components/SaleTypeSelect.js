import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

class SaleTypeSelect extends Component {
  state = {
    saleType: "INTERLINE"
  }

  changeSale = event => {
    this.props.onChange(event)
    this.setState({
      saleType: event.target.value
    })
  }

  render() {
    return (
      <FormControl>
        <InputLabel id="sale-type-select-label">Sale Type</InputLabel>
        <Select
          labelId="sale-type-select-label"
          id="sale-type-select"
          name="saleType"
          onChange={this.changeSale}
          value={this.state.saleType}
        >
          <MenuItem value="INTERLINE">Interline</MenuItem>
          <MenuItem value="DOMESTIC">Domestic</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

export default SaleTypeSelect;
