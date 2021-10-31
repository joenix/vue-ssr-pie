// Module Hook
module.exports = class Hook
{
	constructor (

		Proxy,

		str = '', // String

		arr = [], // Array

		json = {}, // Object

		noop = () => {}, // Function

		promise = Promise,

		webpack = ( mode = json ) => {

			return {

				basic:  mode,

				client: mode,

				server: mode

			}

		}

	)

	{
		return {

			Hook: {

				Main: webpack( noop ),

				Server: {

					app: json,

					extend: noop

				},

				Webpack: (

					( group = {} ) => {

						Proxy.Pack.map(

							( observe ) => {

								// Function
								if ( ['entry'].includes( observe ) )
								{
									return // group[ observe ] = webpack( noop )
								}

								// String
								if ( ['mode', 'devtool', 'target'].includes( observe )  )
								{
									return group[ observe ] = webpack( str )
								}

								// Array
								if ( ['plugins'].includes( observe ) )
								{
									return group[ observe ] = webpack( arr )
								}

								// Json
								return group[ observe ] = webpack( json )

							}

						)

						return group

					}

				)

				( /* Every Webpack Hook Has End: <Basic> + <Client> + <Server> */ )

			}

		}

	}
}
