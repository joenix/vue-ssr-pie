module.exports = class read
{
	constructor ({ Depend, Root })
	{
		return ( file, path ) => {

			try
			{
				return Depend.doc.fs.readFileSync( Depend.doc.path.join( path, file ), 'utf-8');
			}
			catch (e)
			{
				console.log(`Read Error: ${file}`);
			}

		}
	}
}
