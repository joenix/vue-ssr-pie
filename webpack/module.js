module.exports = class module
{
	constructor ({ Depend, Hook, Util, Loader })
	{
		return End => (

			Util.lapse(

				Object,

				Util.assign(

					{

						basic: {

							noParse: /es6-promise\.js$/,

							rules: [

								Loader.vue,

								Loader.js,

								Loader.resource,

								Loader.stylus

							]

						}

					},

					Hook.Webpack.module

				)

			)

		)

		[ End ]

	}
}
