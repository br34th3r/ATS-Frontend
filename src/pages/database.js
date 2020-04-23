import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'
import DatabaseForm from '../components/DatabaseForm'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	container: {
		padding: theme.spacing(3)
	},
	paper: {
		padding: theme.spacing(5),
		height: "100%"
	},
	formItem: {
		fontSize: "1.5em"
	},
	modalStyle: {
    position: 'absolute',
		top: "45vh",
		left: "45vw",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
	}
})

class DatabasePage extends Component {
	backupDatabaseCallback(json) {
		console.log(json)
	}

	restoreDatabaseCallback(json) {
		console.log(json)
	}

	render() {
		return (
			<Layout location={this.props.location} title={this.props.data.site.siteMetadata.title}>
				<Container className={this.props.classes.container}>
          <Paper className={this.props.classes.paper}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
                <Typography color="inherit" variant="h5">
                  {"Create a Backup of the Database"}
                </Typography>
                <br />
                <DatabaseForm
                  backendUrl={"/database/backup"}
                  formCallback={this.backupDatabaseCallback}
                  nav={'/database'}
                  successText={"Database Successfully Backed Up!"}
                  failureText={"An Error Occurred"}
                  modalStyle={this.props.classes.modalStyle}
                  submitText={"Backup Database"}
                  method={"get"}
                />
							</Grid>
              <Grid item xs={6}>
                <Typography color="inherit" variant="h5">
                  {"Restore Database from a Backup"}
                </Typography>
                <br />
                <DatabaseForm
                  backendUrl={"/database/restore"}
                  formCallback={this.restoreDatabaseCallback}
                  nav={'/database'}
                  successText={"Restored Database!"}
                  failureText={"An Error Occurred"}
                  modalStyle={this.props.classes.modalStyle}
                  submitText={"Restore Database"}
                  method={"post"}
                >
                  <TextField type="text" name="backup" id="backup" placeholder="Backup Number" className={this.props.classes.formItem} /><br />
                </DatabaseForm>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <Paper className={this.props.classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography color="inherit" variant="h5">
                  {"Add a System User"}
                </Typography>
                <DatabaseForm
                  backendUrl={"/addUser"}
                  formCallback={this.addUserCallback}
                  nav={'/database'}
                  successText={"Added User!"}
                  failureText={"An Error Occurred"}
                  modalStyle={this.props.classes.modalStyle}
                  submitText={"Add User"}
                  method={"post"}
                >
                  <TextField type="text" name="username" id="username" placeholder="ID" className={this.props.classes.formItem} /><br />
                  <TextField type="password" name="password" id="password" placeholder="password" className={this.props.classes.formItem} /><br />
                  <TextField type="text" name="access" id="access" placeholder="Access Rights" className={this.props.classes.formItem} /><br />
                  <TextField type="text" name="name" id="name" placeholder="Name (Optional)" className={this.props.classes.formItem} /><br />
                </DatabaseForm>
              </Grid>
						</Grid>
          </Paper>
				</Container>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
export default withStyles(styles)(DatabasePage)
