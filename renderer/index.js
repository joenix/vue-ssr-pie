// Module Renderer
module.exports = class Renderer
{
	constructor ( Proxy )
	{
		return Proxy.Util.imports(

			'Renderer',

			['create'],

			Proxy,

			{}

			// {
			// 	Create ( bundle = Proxy.Util.resolve( `${Proxy.Path.dist}/vue-ssr-server-bundle.json` ), extension )
			// 	{
			// 		return Proxy.Depend.core.ssr.createBundleRenderer(

			// 			bundle,

			// 			Object.assign(

			// 				extension,

			// 				{
			// 					cache: Proxy.Depend.doc.lru({

			// 						max: 1000,
			// 						maxAge: 1000 * 60 * 15

			// 					}),

			// 					basedir: Proxy.Util.resolve( `${Proxy.Project}/dist` ),

			// 					runInNewContext: false
			// 				}

			// 			)

			// 		)

			// 	}
			// }

		)
	}
}
