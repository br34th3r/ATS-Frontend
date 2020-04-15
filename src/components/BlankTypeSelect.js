import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BlankTypeSelect extends Component {
  render() {
    return (
      <>
        <InputLabel id="blank-type-select-label">Blank Type</InputLabel>
        <Select
          labelId="blank-type-select-label"
          id="blank-type-select"
          name="blankType"
          value={this.props.blankType}
          onChange={this.props.onChange}
        >
          <MenuItem value={101}>101</MenuItem>
          <MenuItem value={201}>201</MenuItem>
          <MenuItem value={420}>420</MenuItem>
          <MenuItem value={440}>440</MenuItem>
          <MenuItem value={444}>444</MenuItem>
          <MenuItem value={451}>451</MenuItem>
          <MenuItem value={452}>452</MenuItem>
        </Select>
      </>
    )
  }
}

export default BlankTypeSelect;
