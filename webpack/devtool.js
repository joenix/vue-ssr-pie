module.exports = class devtool
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				String,

				Util.assign(

					{

						client: Util.mode.dev ? '#cheap-module-source-map' : false,

						server: '#source-map'

					},

					Hook.Webpack.devtool

				)

			)

		)

		[ End ]

	}
}
