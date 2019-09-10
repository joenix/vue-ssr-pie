module.exports = class js
{
	constructor ()
	{
		return {

			test: /\.js/,

			loader: 'babel-loader',

			exclude: /node_modules/
		}
	}
}
