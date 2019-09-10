module.exports = class Pie {

	constructor( Ressive, Proxy, Support, Promise, Princess, Self = this )
	{

		Princess = new Promise(

			(resolve, reject) => {

				new Ressive(Proxy)

					.next(

						Support.hook,

						Support.util,

						Support.loader,

						Support.webpack,

						Support.renderer,

						Support.server,

						Proxy => (Self.Proxy = Proxy)

					)

					.next(() => console.log(`Vue-Ssr-Pie is Ready .`));

				// Proxy Object 2 Project
				resolve(this.Proxy.Hook);

			}

		);

		// Finally Executer
		Princess.next( Message => {

			switch (this.Proxy.Argv.env)
			{
				case 'development':

					this.Proxy.Server.create(

						// Server Configure
						{ port: 10800, host: 'localhost', protocol: 'http' },

						// Compiler
						() => this.Proxy.Webpack.run(this.Proxy.Webpack, { param: 'Inject ABC =' }),

						// Hook Extention
						this.Proxy.Hook.Server.extend

					).then(

						({ App, Compiler, request, response }) => {

							/* ===> 愉快的写业务啦 <=== */

							// Watch Template
							// this.Proxy.Util.watch( this.Proxy.Path.template )

							this.Proxy.Server.static( this.Proxy.Path.dist )

							Compiler.then(

								({ client, server }) => {

									client.run(

										( error, status ) => {

											if (error)
											{
												return console.error( error.stack || error )
											}

											if ( status.hasErrors() )
											{
												return console.error( status.toJson().errors )
											}

										}

									);

									server.run(

										(error, status) => {

											if ( error )
											{
												return console.error( error.stack || error )
											}

											if ( status.hasErrors() )
											{
												return console.error( status.toJson().errors )
											}

											App.use('/', (request, response) => {

												// resolve( status )
												let render = this.Proxy.Renderer.create()

												render.renderToString((error, html) => {
													console.log('eeeeeeeeeee', error)
													console.log(html);
													response.end(html);
												})

												// res.send('abc')
											})
										})
								}
							)

						}

					);

					break;

				case 'production':
					this.Proxy.Server.create(
						{ port: 80 },

						this.Proxy.Hook.Server.extend
					).then(({ App, request, response }) => {
						App.use('/', (request, response) => {
							response.send('joenix');
						});
					});

					break;
			}
		});

		return Princess;
	}
};
