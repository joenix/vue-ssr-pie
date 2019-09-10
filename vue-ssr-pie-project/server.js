/* !!
 * * Project Demo
 * ===== ===== =====
 */


// Path Joint
const { join } = require('path')

// Detect Exist
const { existsSync } = require('fs')

// Import Vue-Ssr-Pie
const ssrPie = require('../vue-ssr-pie') // require('vue-ssr-pie');

// Project Manifest
const manifest = join(__dirname, 'manifest.js')



if( existsSync(manifest) )
{
	new ssrPie( require( manifest ) )

		.then(

			({ Main, Webpack, Server, Vue, Store, Router }, next) => {


// Main Client
// Main.client = new Promise(
//
// 	( resolve, reject ) => {
//
// 		console.log('in Main Client ...')
//
// 		return {}
//
// 	}
//
// )


// console.log(Webpack);
// Webpack.plugins.client = [0]

Main.client = ( Hook ) => {

	console.log('RRRRRRRRR', Hook);

}

console.log('===== in Main ======');
console.log(Main);

// Server Extend
Server.extend = ( Server ) => {

	// Server.use('/', (request, response) => {
	// 	response.send('Hello World')
	// })

}

				// next('Run Project');

				next( // Init

					(Vue, Store, Router) => {} // entry.js

				)

			}

		)

		.catch(

			error => console.log( `Error: ${error}` )

		)

}
else
{
	console.error(`could not found [config.js] in ${__dirname}, please create a new one!`), process.exit(1)
}
