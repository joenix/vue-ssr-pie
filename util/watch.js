module.exports = class watch
{
	constructor ({ Depend, Util, Project })
	{
		return ( path ) => new Promise(

			( resolve, reject ) => {

				Depend.doc.chokidar.watch( path ).on('change', () => {

					resolve( Util.read( path, Project ) )

				})

			}

		)

	}
}
