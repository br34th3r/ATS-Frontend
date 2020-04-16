import React, { Component } from 'react'
import { getUser } from '../services/auth'
import {
  FormControl,
  Button,
  Modal
} from '@material-ui/core';

class DatabaseForm extends Component {
  state = {
    open: false,
    success: false,
    errors: "None",
    userID: getUser()._id
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
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  formCallback = json => {
    if (json.ok) {
      this.setState({
        success: true,
        errors: "None"
      })
    } else {
      this.setState({
        success: false,
        errors: json.errors
      })
    }
  }

  handleGETSubmit = event => {
    event.preventDefault()
    fetch(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}${this.props.backendUrl}`)
    .then(res => res.json())
    .then(json => this.formCallback(json))
    .catch(err => console.log(err))
    return false
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}${this.props.backendUrl}`, {
      method: this.props.method,
      mode: "cors",
      redirect: 'follow',
      headers: {
        'Content-type': 'application/json'
      },
      body: this.state ? JSON.stringify(this.state) : null
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.formCallback(json)
      this.props.formCallback(this.state)
    })
    .catch(err => console.log(err))
    return false
  }

  render() {
    const childrenWithHandler = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onChange: this.handleUpdate })
    );

    return (
      <>
      <form
        method={this.props.method}
        onSubmit={event => {
          (this.props.method.toUpperCase() === "GET") ? this.handleGETSubmit(event) : this.handleSubmit(event)
          return false
        }}
      >
        <FormControl className={this.props.className ? this.props.className : null}>
          {childrenWithHandler}
          <Button variant="outlined" type="submit" color="primary" onClick={this.handleOpen}>
            {this.props.submitText}
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
            {this.state.success ? this.props.successText : `${this.props.failureText} - ${this.state.errors}` }
          </p>
        </div>
      </Modal>
      </>
    )
  }
}

export default DatabaseForm
