module.exports = class js
{
	constructor ()
	{
		return {

			test: /\.(png|jpg|gif|svg)$/,

			loader: 'url-loader',

			options: {
				limit: 80000,
				name: '[name].[ext]?[hash]'
			}
		}
	}
}
