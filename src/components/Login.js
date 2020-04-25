import React from "react"
import { handleLogin } from "../services/auth"
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
          <FormControl>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input onChange={this.handleUpdate} id="username" name="username" />
          </FormControl><br />
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type="password" onChange={this.handleUpdate} id="password" name="password" />
          </FormControl><br /><br />
          <Button variant="outlined" type="submit" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    )
  }
}

export default Login
