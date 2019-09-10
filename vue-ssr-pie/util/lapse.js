module.exports = class lapse
{
	constructor ({ Hook })
	{

		return (

			mode = Object,

			scope = {

				basic: mode,

				client: mode,

				server: mode

			},

			exe = ( End ) => {

				switch ( mode )
				{

					case Array:

						return [ ...scope.basic || [], ...End ]

					case Object:

						return Object.assign( {}, scope.basic, End )

					case String:

						return End

					case Function:

						return {

							client: scope.client,

							server: scope.server

						}

					case Promise:

						return {

							client: scope.client,

							server: scope.server

						}

				}

			}

		) => {

			return {

				client: exe( scope.client ),

				server: exe( scope.server )

			}

		}

	}

	exe ( hand )
	{

	}
}
