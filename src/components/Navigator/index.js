import React from 'react'
import { Link } from 'gatsby'
import { logout } from '../../services/auth'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PeopleIcon from '@material-ui/icons/People'
import AssessmentIcon from '@material-ui/icons/Assessment';
import StorageIcon from '@material-ui/icons/Storage';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import LockIcon from '@material-ui/icons/Lock';
const categories = [
	{
		id: 'Actions',
		children: [
			{ id: 'Tickets', icon: <ConfirmationNumberIcon />, page: 'tickets' },
			{ id: 'Blanks', icon: <ConfirmationNumberOutlinedIcon />, page: 'blanks'},
			{ id: 'Customers', icon: <PeopleIcon />, page: 'customers' },
			{ id: 'Reports', icon: <AssessmentIcon />, page: 'reports' },
			{ id: 'Database', icon: <StorageIcon />, page: 'database' },
		],
	},
]

const styles = theme => ({
	categoryHeader: {
		paddingTop: 16,
		paddingBottom: 16,
	},
	categoryHeaderPrimary: {
		color: theme.palette.common.white,
	},
	item: {
		paddingTop: 4,
		paddingBottom: 4,
		color: 'rgba(255, 255, 255, 0.7)',
	},
	itemCategory: {
		backgroundColor: '#232f3e',
		boxShadow: '0 -1px 0 #404854 inset',
		paddingTop: 16,
		paddingBottom: 16,
	},
	firebase: {
		fontSize: 24,
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.common.white,
	},
	itemActionable: {
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.08)',
		},
	},
	itemActiveItem: {
		color: '#4fc3f7',
	},
	itemPrimary: {
		color: 'inherit',
		fontSize: theme.typography.fontSize,
		'&$textDense': {
			fontSize: theme.typography.fontSize,
		},
	},
	textDense: {},
	divider: {
		marginTop: theme.spacing(2),
	},
})

function Navigator({ classes, location = null, ...rest }) {
	const matchPath = location ? location.pathname.replace(/\//g, '') : null
	return (
		<Drawer variant="permanent" {...rest}>
			<List disablePadding>
				<ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
					<Grid container alignItems="center" spacing={8} direction="row">
						<Grid item>Air Ticket Sales</Grid>
					</Grid>
				</ListItem>

				<Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
					<ListItem className={classNames(classes.item, classes.itemCategory)}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText
							classes={{
								primary: classes.itemPrimary,
							}}
						>
							Dashboard
						</ListItemText>
					</ListItem>
				</Link>
				{categories.map(({ id, children }) => (
					<React.Fragment key={id}>
						<ListItem className={classes.categoryHeader}>
							<ListItemText
								classes={{
									primary: classes.categoryHeaderPrimary,
								}}
							>
								{id}
							</ListItemText>
						</ListItem>
						{children.map(({ id: childId, icon, page = null }) => {
							return page ? (
								<Link
									key={childId}
									style={{ textDecoration: 'none', color: 'inherit' }}
									to={`/${page}`}
								>
									<ListItem
										button
										dense
										className={classNames(
											classes.item,
											classes.itemActionable,
											(matchPath && page ? matchPath === page : false) && classes.itemActiveItem
										)}
									>
										<ListItemIcon>{icon}</ListItemIcon>
										<ListItemText
											classes={{
												primary: classes.itemPrimary,
												textDense: classes.textDense,
											}}
										>
											{childId}
										</ListItemText>
									</ListItem>
								</Link>
							) : (
								<div />
							)
						})}
						<ListItem
							button
							onClick={logout}
							dense
							className={classNames(
								classes.item,
								classes.itemActionable,
							)}
						>
							<ListItemIcon>{<LockIcon />}</ListItemIcon>
							<ListItemText
								classes={{
									primary: classes.itemPrimary,
									textDense: classes.textDense,
								}}
							>
								{"Logout"}
							</ListItemText>
						</ListItem>
						<Divider className={classes.divider} />
					</React.Fragment>
				))}
			</List>
		</Drawer>
	)
}

Navigator.propTypes = {
	classes: PropTypes.object.isRequired,
	location: PropTypes.object,
}

export default withStyles(styles)(Navigator)
