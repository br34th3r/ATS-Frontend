import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Login from '../components/Login'
import { isLoggedIn } from '../services/auth'
import Layout from '../components/Layout'

function DashboardIndex({ data, location }) {
	if (isLoggedIn()) {
		return (
			<Layout location={location} title={data.site.siteMetadata.title}>
				<h1>Home</h1>
			</Layout>
		)
	} else {
		return (
			<Login />
		)
	}
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
