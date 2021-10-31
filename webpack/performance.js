module.exports = class performance
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{

						basic: {

							maxEntrypointSize: 300000,

							hints: Util.dev ? false : 'warning'

						}

					},

					Hook.Webpack.performance

				)

			)

		)

		[ End ]

	}
}
