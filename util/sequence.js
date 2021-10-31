module.exports = class Sequence
{
	constructor ()
	{
		return ( task, fn ) => {

			return task.reduce(

				( promise, one ) => promise.then( () => fn( task ) ),

				Promise.resolve()

			);

		}

	}
}
