module.exports = class Dir
{
	constructor ( lodash, path )
	{
		return this
	}

	normalize ( str )
	{
		return str => str.replace( /\//g, lodash.escapeRegExp( path.sep ) )
	}

	replace ( str )
	{
		return /^win/.test( process.platform ) ? str.replace(/\\/g, '\\\\') : str
	}

	resolve ( resolve )
	{
		return dir.replace(

			resolve(

				...Array.prototype.slice.apply( arguments ).map( this.normalize )

			)

		)
	}
}
