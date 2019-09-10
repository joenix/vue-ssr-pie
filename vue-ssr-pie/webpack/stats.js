module.exports = class stats
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{

						basic: {

							assets: true,
							colors: true,
							errors: true,
							errorDetails: true,
							hash: false

						}

					},

					Hook.Webpack.stats

				)

			)

		)

		[ End ]

	}
}
