import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class CardDetailsInput extends Component {
  render() {
    return (
      <>
        <FormControl>
          <TextField
            id="local-tax-select"
            name="localTax"
            placeholder="Local Tax"
            className={this.props.className}
            onChange={this.props.onChange}
          />
        </FormControl><br />
        <FormControl>
          <TextField
            id="other-tax-select"
            name="otherTax"
            placeholder="Other Tax"
            className={this.props.className}
            onChange={this.props.onChange}
          />
        </FormControl>
      </>
    )
  }
}

export default CardDetailsInput;
