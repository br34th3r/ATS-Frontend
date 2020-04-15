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
import CustomersList from '../components/CustomersList'

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

class CustomersPage extends Component {
	constructor(props, context) {
		super(props, context)
		this.addCustomersCallback = this.addCustomersCallback.bind(this)
	}

	addCustomersCallback(json) {
		console.log(json)
	}

	removeCustomersCallback(json) {
		console.log(json)
	}

	render() {
		if (!isLoggedIn()) {
	    navigate('/')
			return null
	  } else {
			return (
				<Layout location={this.props.location} title={this.props.data.site.siteMetadata.title}>
					<Container className={this.props.classes.container}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Paper className={this.props.classes.paper}>
									<Typography color="inherit" variant="h5">
										{"Add Customer"}
									</Typography>
									<br />
									<DatabaseForm
										backendUrl={"/addCustomer"}
										formCallback={this.addCustomersCallback}
										nav={'/customers'}
										successText={"Added Customer!"}
										failureText={"An Error Occurred"}
										modalStyle={this.props.classes.modalStyle}
										submitText={"Add Customer"}
										method={"post"}
									>
										<TextField type="string" name="name" id="name" placeholder="Name" className={this.props.classes.formItem} /><br />
										<TextField type="string" name="surname" id="surname" placeholder="Surname" className={this.props.classes.formItem} /><br />
										<TextField type="string" name="alias" id="alias" placeholder="Alias" className={this.props.classes.formItem} /><br />
										<TextField type="string" name="email" id="email" placeholder="Email" className={this.props.classes.formItem} /><br />
									</DatabaseForm>
								</Paper>
							</Grid>
							<Grid item xs={6}>
								<Paper className={this.props.classes.paper}>
									<Typography color="inherit" variant="h5">
										{"Customers"}
									</Typography>
									<CustomersList />
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</Layout>
			)
		}
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
export default withStyles(styles)(CustomersPage)
