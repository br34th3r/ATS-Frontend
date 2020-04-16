import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

class BlankSelect extends Component {
  state = {
    checked: true
  }

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="payLater"
              color="primary"
              onChange={this.props.onChange}
              value={this.state.checked}
            />
          }
          label="Pay Later?"
        />
      </FormControl>
    )
  }
}

export default BlankSelect;
