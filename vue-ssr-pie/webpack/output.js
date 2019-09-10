module.exports = class output
{
	constructor ({ Depend, Hook, Util, Path })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{
						basic: {

							path: Util.resolve( Path.dist ),

							publicPath: Path.dist,

						},

						client: {

							filename: '[name].[chunkhash].js'

						},

						server: {

							// filename: 'server-bundle.js',
							filename: '[name]-bundle.js',

							libraryTarget: 'commonjs2'

						}
					},

					Hook.Webpack.output
				)

			)
		)

		[ End ]
	}
}
