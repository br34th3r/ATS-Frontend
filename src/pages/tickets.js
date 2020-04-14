import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'

function TicketsPage({ data, location }) {
	const { title } = data.site.siteMetadata
  if (!isLoggedIn()) {
    navigate('/')
  }
	return (
		<Layout location={location} title={title}>
			<h1>Tickets</h1>
		</Layout>
	)
}
TicketsPage.propTypes = {
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
export default TicketsPage
