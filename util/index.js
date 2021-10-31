// Module Util
module.exports = class Util
{
	constructor ( Proxy )
	{
		// Special Import
		this.imports = ( space = '', group = [], proxy = {}, extension = {}, exporter = {} ) => {

			Object.assign(

				exporter[ space ] = exporter[ space ] || {},

				Proxy.Depend.kit.importz(

					group,

					(
						name,

						cip,

						trunk = cip( require( `${Proxy.Root}/${space.toLowerCase()}/${name}` ) )

					) => {

						return new trunk( proxy, extension )

					}

				)

			)

			return exporter
		}

		// Return Utils
		return this.imports(

			'Util',

			['noop', 'mode', 'read', 'resolve', 'merge', 'assign', 'lapse', 'gather', 'watch'],

			Proxy,

			{},

			{
				Util: { imports: this.imports }
			}

		)
	}
}
