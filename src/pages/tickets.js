import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'
import DatabaseForm from '../components/DatabaseForm'
import BlankTypeSelect from '../components/BlankTypeSelect'
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

class TicketsPage extends Component {
	constructor(props, context) {
		super(props, context)
		this.addBlanksCallback = this.addBlanksCallback.bind(this)
	}

	addBlanksCallback(json) {
		console.log(json)
	}

	removeBlanksCallback(json) {
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
										{"Add Blank(s)"}
									</Typography>
									<br />
									<DatabaseForm
										backendUrl={"/addBlanks"}
										formCallback={this.addBlanksCallback}
										nav={'/tickets'}
										successText={"Added Blanks!"}
										failureText={"An Error Occurred"}
										modalStyle={this.props.classes.modalStyle}
										submitText={"Add Blank(s)"}
										method={"post"}
									>
										<BlankTypeSelect className={this.props.classes.formItem} /><br />
										<TextField type="number" name="start" id="start" placeholder="Blank Start" className={this.props.classes.formItem} /><br />
										<TextField type="number" name="end" id="end" placeholder="Blank End" className={this.props.classes.formItem} /><br />
									</DatabaseForm>
								</Paper>
							</Grid>
							<Grid item xs={6}>
								<Paper className={this.props.classes.paper}>
									<Typography color="inherit" variant="h5">
										{"Remove Blank(s)"}
									</Typography>
									<br />
									<DatabaseForm
										backendUrl={"/removeBlanks"}
										formCallback={this.removeBlanksCallback}
										nav={'/tickets'}
										successText={"Removed Blanks!"}
										failureText={"An Error Occurred"}
										modalStyle={this.props.classes.modalStyle}
										submitText={"Remove Blank(s)"}
										method={"delete"}
									>
										<TextField type="number" name="start" id="start" placeholder="Blank Start" className={this.props.classes.formItem} /><br />
										<TextField type="number" name="end" id="end" placeholder="Blank End" className={this.props.classes.formItem} /><br />
									</DatabaseForm>
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
export default withStyles(styles)(TicketsPage)
