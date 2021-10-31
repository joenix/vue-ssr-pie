module.exports = class create
{
	constructor ({ Depend, Util }, { App })
	{
		return ( { port, host, protocol }, injection = Util.noop, extention = Util.noop ) => {

			return new Promise(

				( resolve, reject, Compiler = injection() ) => {

					App.listen(

						port,

						( e ) => {

							if ( e ) return reject( e )

							console.log(

								( protocol && host ) ? `Server Running at ${protocol}//${host}:${port}` : `Server Running at Port: ${port}`

							)

						}

					)

					App.get('*', ( request, response, next ) => {

						response.setHeader('Content-Type', 'text/html')

						resolve( { App, Compiler, request, response } )

						next()

					})

					extention( App )

				}

			)

		}

	}

}
