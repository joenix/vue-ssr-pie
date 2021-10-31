module.exports = class stylus
{
	constructor ({ Depend, Util })
	{
		return {

			test: /\.styl(us)?$/,

			use: Util.mode.dev ?

				['vue-style-loader', 'css-loader', 'stylus-loader'] :

				Depend.webpack.extractText.extract({

					fallback: 'vue-style-loader',

					use: [
						{
							loader: 'css-loader',
							options: { minimize: true, sourceMap: true }
						},

						'stylus-loader'
					]

				})
		}
	}
}
