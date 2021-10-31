module.exports = class Static
{
	constructor ({ Depend, Util }, { App })
	{

		return ( path, cache = true ) => Depend.core.express.static(

			Util.resolve( path ),

			{
				maxAge: cache ? ( 1000 * 60 * 60 * 24 * 30 ) : 0
			}

		)
	}
}
