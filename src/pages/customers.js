import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'

function CustomersPage({ data, location }) {
	const { title } = data.site.siteMetadata
  if (!isLoggedIn()) {
    navigate('/')
		return null
  } else {
		return (
			<Layout location={location} title={title}>
				<h1>Customers</h1>
			</Layout>
		)
	}
}
CustomersPage.propTypes = {
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
export default CustomersPage
