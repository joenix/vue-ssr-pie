module.exports = class mode
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				String,

				Util.assign(

					{

						client: 'production',

						server: 'production'

					},

					Hook.Webpack.mode

				)

			)

		)

		[ End ]
	}
}
