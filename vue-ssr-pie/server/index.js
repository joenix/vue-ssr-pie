// Module Server
module.exports = class Server
{
	constructor ( Proxy )
	{
		return Proxy.Util.imports(

			'Server',

			['create', 'static'],

			Proxy,

			{
				App: Proxy.Hook.Server.app = new Proxy.Depend.core.express()
			}

		)
	}
}
