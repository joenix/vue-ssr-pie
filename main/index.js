// Project Structure
const Ressive = require('ressive')

// Package Import
const Importz = require('importz')

// Argv
const Argv = require('cross-env-argv')( process )

// Node Modules
const Package = require('webpack-root')()

// Pie Root
const Root = require('webpack-root')( __dirname, '..' )

// Project Root
const Project = process.cwd()

// Depend
const Depend = require( `${Root}/depend` )

// Support
const Support = require( `${Root}/support` )

// Webpack
const Pack = require( `${Root}/support/webpack` )

// Path Pre
const Path = require( `${Root}/support/path` ) ({ Package, Root, Project })

// Main
const Pie = require( `${Root}/pie` )

// Promise
const Promise = require('promise-super')


// Module Export
module.exports = class ssrPie
{
	constructor (

		Configure

	)

	{
		return new Pie(

			Ressive,

			{
				Configure,

				Path,

				Pack,

				Depend,

				Argv,

				Package,

				Root,

				Project
			},

			Importz(

				Support,

				( name, cip ) => cip( require( `${Root}/${name}` ) )

			),

			Promise

		)
	}
}
