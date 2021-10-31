module.exports = class vue
{
	constructor ()
	{
		return {

			test: /\.vue$/,

			loader: 'vue-loader',

			options: {
				compilerOptions: {
					preserveWhitespace: false
				}
			}
		}
	}
}
