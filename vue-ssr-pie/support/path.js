module.exports = ({ Package, Root, Project }) => {

	return {

		// Template Entry
		template: `${Project}/src/index.template.html`,

		// Webpack Input
		provide: {
			client: `${Root}/webpack/provide.client`,
			server: `${Root}/webpack/provide.server`,
		},

		// Webpack Output
		dist: `${Project}/.casaba`,
		worker: `${Project}/.casaba/service-worker.js`,
		bundle: `${Project}/.casaba/vue-ssr-server-bundle.json`,
		manifest: `${Project}/.casaba/vue-ssr-client-manifest.json`

	}

}
