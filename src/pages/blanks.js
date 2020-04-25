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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
	},
	table: {
    minWidth: 650,
  },
})

class BlanksPage extends Component {
	state = {
		found: null,
		errors: null,
		ticket: null
	}

	constructor(props, context) {
		super(props, context);
		this.addBlanksCallback = this.addBlanksCallback.bind(this);
		this.removeBlanksCallback = this.removeBlanksCallback.bind(this);
		this.findBlanksCallback = this.findBlanksCallback.bind(this);
		this.assignBlanksCallback = this.assignBlanksCallback(this);
	}

	addBlanksCallback(json) {
		console.log(json)
	}

	removeBlanksCallback(json) {
		console.log(json)
	}

	assignBlanksCallback(json){
		console.log(json)
	}

	findBlanksCallback(json) {
		if(json.errors !== "None") {
			this.setState({
				errors: json.errors
			})
		} else {
			this.setState({
				ticket: json.data
			})
		}
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
										<BlankTypeSelect className={this.props.classes.formItem} /><br />
										<TextField type="number" name="start" id="start" placeholder="Blank Start" className={this.props.classes.formItem} /><br />
										<TextField type="number" name="end" id="end" placeholder="Blank End" className={this.props.classes.formItem} /><br />
									</DatabaseForm>
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper className={this.props.classes.paper}>
									<Typography color="inherit" variant="h5">
										{"Find a Blank"}
									</Typography>
									<br />
									<DatabaseForm
										backendUrl={"/blanks/find"}
										formCallback={this.findBlanksCallback}
										nav={'/tickets'}
										successText={"Found Blank!"}
										failureText={"An Error Occurred"}
										modalStyle={this.props.classes.modalStyle}
										submitText={"Find Blank"}
										method={"post"}
									>
										<BlankTypeSelect className={this.props.classes.formItem} /><br />
										<TextField type="number" name="blankNumber" id="blankNumber" placeholder="Blank Number" className={this.props.classes.formItem} /><br />
									</DatabaseForm><br />
									<TableContainer component={Paper}>
							      <Table className={this.props.classes.table} aria-label="simple table">
							        <TableHead>
							          <TableRow>
							            <TableCell>Ticket ID</TableCell>
							            <TableCell align="right">Departure</TableCell>
							            <TableCell align="right">Destination</TableCell>
							            <TableCell align="right">Sale Date</TableCell>
							            <TableCell align="right">Blank ID</TableCell>
							          </TableRow>
							        </TableHead>
							        <TableBody>
							          {this.state.ticket !== null ? (
							            <TableRow key={this.state.ticket._id}>
							              <TableCell component="th" scope="row">
							                {this.state.ticket._id}
							              </TableCell>
							              <TableCell align="right">{this.state.ticket.departure}</TableCell>
							              <TableCell align="right">{this.state.ticket.destination}</TableCell>
							              <TableCell align="right">{this.state.ticket.saleDate}</TableCell>
							              <TableCell align="right">{this.state.ticket.blankID}</TableCell>
							            </TableRow>
							          ) : null }
							        </TableBody>
							      </Table>
							    </TableContainer>
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper className={this.props.classes.paper}>
									<Typography color="inherit" variant="h5">
										{"Assign a Blank"}
									</Typography>
									<br />
									<DatabaseForm
										backendUrl={"/blanks/assign"}
										formCallback={this.assignBlanksCallback}
										nav={'/blanks'}
										successText={"Blank Assigned!"}
										failureText={"An Error Occurred"}
										modalStyle={this.props.classes.modalStyle}
										submitText={"Assign Blanks"}
										method={"post"}
									>
										<BlankTypeSelect className={this.props.classes.formItem} /><br />
										<TextField type="string" name="blankNumber" id="blankNumber" placeholder="Blank Number" className={this.props.classes.formItem} /><br />
										<TextField type="string" name="agentID" id="agentID" placeholder="Agent ID" className={this.props.classes.formItem} /><br />
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
export default withStyles(styles)(BlanksPage)
