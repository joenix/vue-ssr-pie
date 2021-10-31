module.exports = class externals
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{

						client: {},

						server: Depend.webpack.external({

							whitelist: /\.css$/

						})

					},

					Hook.Webpack.externals

				)

			)

		)

		[ End ]

	}
}
