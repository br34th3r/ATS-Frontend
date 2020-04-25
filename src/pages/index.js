import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Login from '../components/Login'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { isLoggedIn } from '../services/auth'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'

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

class DashboardIndex extends Component {
	render() {
		if (isLoggedIn()) {
			return (
				<Layout location={this.props.location} title={"Dashboard"}>
					<Grid container spacing={3} className={this.props.classes.container}>
						<Grid item xs={6}>
							<Paper className={this.props.classes.paper}>
								<h1>Today's Exchange Rate</h1>
								<h2>!!INSERT ER HERE!!</h2>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={this.props.classes.paper}>
								<h1>Current Blank Commissions</h1>
								<h2>!!LIST OF BLANK COMMISSIONS!!</h2>
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Paper className={this.props.classes.paper}>
								<h1>Notices</h1>
								<h2>!!ADMIN AND MANAGER NOTICES HERE!!</h2>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={this.props.classes.paper}>
								<h1>Quick Backup</h1>
								<h2>!!BACKUP DB BUTTON HERE!!</h2>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={this.props.classes.paper}>
								<h1>My Details</h1>
								<h2>!!USER DETAILS HERE!!</h2>
							</Paper>
						</Grid>
					</Grid>
				</Layout>
			)
		} else {
			return (
				<Layout location={this.props.location} title={"Login"}>
					<Login classes={this.props.classes} />
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
export default withStyles(styles)(DashboardIndex)
