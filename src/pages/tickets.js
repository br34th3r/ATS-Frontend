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
import CustomerSelect from '../components/CustomerSelect'
import SaleTypeSelect from '../components/SaleTypeSelect'
import BlankSelect from '../components/BlankSelect'
import FromToSelect from '../components/FromToSelect'
import CostSelect from '../components/CostSelect'
import PaymentMethodSelect from '../components/PaymentMethodSelect'
import CardDetailsInput from '../components/CardDetailsInput'
import TaxesSelect from '../components/TaxesSelect'
import PayLaterCheckbox from '../components/PayLaterCheckbox'
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
		fontSize: "1.2em",
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
	state = {
		paymentMethod: "CASH"
	}

	constructor(props) {
		super(props);
		this.paymentMethodCallback = this.paymentMethodCallback.bind(this);
	}

	addSoldTicketCallback(json) {
		console.log(json)
	}

	paymentMethodCallback(event) {
		this.setState({
			paymentMethod: event.target.value
		})
	}

	render() {
		if (!isLoggedIn()) {
	    navigate('/')
			return null
	  } else {
			return (
				<Layout location={this.props.location} title={"Tickets"}>
					<Container className={this.props.classes.container}>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Paper className={this.props.classes.paper}>
									<Grid container spacing={3}>
										<Grid item xs={6}>
											<Typography color="inherit" variant="h5">
												{"Record a Sale"}
											</Typography>
											<br />
											<DatabaseForm
												backendUrl={"/addSoldTicket"}
												formCallback={this.addSoldTicketCallback}
												nav={'/tickets'}
												successText={"Added a Sold Ticket!"}
												failureText={"An Error Occurred"}
												modalStyle={this.props.classes.modalStyle}
												submitText={"Record Sale"}
												method={"post"}
											>
												<CustomerSelect className={this.props.classes.formItem} /><br />
												<SaleTypeSelect className={this.props.classes.formItem} /><br /><br />
												<BlankSelect className={this.props.classes.formItem} /><br />
												<CostSelect className={this.props.classes.formItem} /><br />
												<PaymentMethodSelect className={this.props.classes.formItem} callback={this.paymentMethodCallback} /><br />
												<CardDetailsInput className={this.props.classes.formItem} paymentMethod={this.state.paymentMethod} /><br />
												<FromToSelect className={this.props.classes.formItem} /><br />
												<TaxesSelect className={this.props.classes.formItem} /><br />
												<PayLaterCheckbox className={this.props.classes.formItem} /><br />
											</DatabaseForm>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={6}>
								<Paper className={this.props.classes.paper}>
									<Typography color="inherit" variant="h5">
										{"Refund a Ticket"}
									</Typography><br />
									<DatabaseForm
										backendUrl={"/refundSoldTicket"}
										formCallback={this.refundSoldTicketCallback}
										nav={'/tickets'}
										successText={"Refunded Ticket!"}
										failureText={"An Error Occurred"}
										modalStyle={this.props.classes.modalStyle}
										submitText={"Refund Ticket"}
										method={"post"}
									>
										<TextField
											id="ticket-id-select"
											name="ticketID"
											placeholder="Ticket ID"
											className={this.props.classes.formItem}
										/><br />
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
