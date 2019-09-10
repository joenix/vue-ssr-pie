// Module Loader
module.exports = class Loader
{
	constructor ( Proxy )
	{
		return Proxy.Util.imports(

			'Loader',

			['vue', 'js', 'resource', 'stylus'],

			Proxy

		)
	}
}
