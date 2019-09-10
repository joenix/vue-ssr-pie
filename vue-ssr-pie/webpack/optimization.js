module.exports = class optimization
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{

						basic: {

							minimize: true,

							splitChunks: {
								chunks: 'async',
								minSize: 80000,
								maxSize: 0,
								minChunks: 1,
								maxAsyncRequests: 5,
								maxInitialRequests: 3,
								automaticNameDelimiter: '~',
								name: true,
								cacheGroups: {
									vendors: {
										test: /[\\/]node_modules[\\/]/,
										priority: -10
									},
									default: {
										minChunks: 2,
										priority: -20,
										reuseExistingChunk: true
									}
								}
							}

						}

					},

					Hook.Webpack.optimization

				)

			)

		)

		[ End ]
	}
}
