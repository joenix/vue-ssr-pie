module.exports = class resolve
{
	constructor ({ Depend, Project })
	{
		return path => Depend.doc.path.resolve( Project, path );
	}

}
