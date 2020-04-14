import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Login from '../components/Login'

function DashboardIndex({ data, location }) {
	return (
		<Login />
	)
}
DashboardIndex.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
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
export default DashboardIndex
