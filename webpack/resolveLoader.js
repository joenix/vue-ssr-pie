module.exports = class resolveLoader
{
	constructor ({ Depend, Hook, Util, Package })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{

						basic: {

							modules: [`${Package}`]

						}

					},

					Hook.Webpack.resolveLoader

				)

			)

		)

		[ End ]
	}
}
