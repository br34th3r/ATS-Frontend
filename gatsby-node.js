const path = require('path')
exports.onCreateWebpackConfig = ({ actions, stage }) => {
	// enable sourcemaps on dev
	// https: //github.com/gatsbyjs/gatsby/issues/6278
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'eval-source-map',
		})
	}

	actions.setWebpackConfig({
		resolve: {
			modules: [path.join(__dirname, 'src'), 'node_modules'],
			alias: {
				'~components': path.resolve(__dirname, 'src/components'),
				'~utils': path.resolve(__dirname, 'src/utils'),
			},
		},
	})
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/ats` page.
  if (page.path.match(/^\/ats/)) {
    page.matchPath = "/ats/content"
    createPage(page)
  }
}
