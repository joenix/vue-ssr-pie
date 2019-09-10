module.exports = class target
{
	constructor ({ Depend, Hook, Util })
	{
		return End => (

			Util.lapse(

				String,

				Util.assign(

					{
						client: 'web',

						server: 'node'
					}

				)

			)

		)

		[ End ]

	}
}
