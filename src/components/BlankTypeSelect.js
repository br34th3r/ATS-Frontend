import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BlankTypeSelect extends Component {
  state = {
    currentValue: 101
  }

  changeBlankType = event => {
    this.props.onChange(event);
    this.setState({
      currentValue: event.target.value
    });
  }

  render() {
    return (
      <>
        <Select
          id="blank-type-select"
          name="blankType"
          placeholder="xxx"
          onChange={this.changeBlankType}
          className={this.props.cssClass}
          value={this.state.currentValue}
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
