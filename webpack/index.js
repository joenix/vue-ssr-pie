// Module Webpack: https://www.webpackjs.com/configuration/#选项
module.exports = class Webpack
{
	constructor ( Proxy )
	{
		return Proxy.Util.imports(

			'Webpack',

			[ ...Proxy.Pack, 'run' ],

			Proxy

		)
	}
}
