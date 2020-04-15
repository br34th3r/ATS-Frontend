import React, { Component } from 'react'
import { navigate } from 'gatsby'
import {
  FormControl,
  Button,
  Modal
} from '@material-ui/core';

class DatabaseForm extends Component {
  state = {
    open: false,
    success: false
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
  };

  handleClose = () => {
    this.setState({
      open: false,
    })
  };

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  formCallback = json => {
    if (!json.errors) {
      this.setState({
        success: true
      })
    } else {
      this.setState({
        success: false
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.formCallback(this.state)
    console.log(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}${this.props.backendUrl}`)
    fetch(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}${this.props.backendUrl}`, {
      method: "POST",
      mode: "cors",
      redirect: 'follow',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(json => this.formCallback(json))
  }

  render() {
    const childrenWithHandler = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onChange: this.handleUpdate })
    );

    return (
      <>
      <form
        method="post"
        onSubmit={event => {
          this.handleSubmit(event)
          navigate('/tickets')
        }}
      >
        <FormControl className={this.props.className ? this.props.className : null}>
          {childrenWithHandler}
          <Button type="submit" color="primary" onClick={this.handleOpen}>
            {"Add Blank(s)"}
          </Button>
        </FormControl>
      </form>
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={this.props.modalStyle}>
          <h2 id="simple-modal-title">Form Submitted</h2>
          <p id="simple-modal-description">
            {this.state.success ? this.props.successText : this.props.failureText }
          </p>
        </div>
      </Modal>
      </>
    )
  }
}

export default DatabaseForm
