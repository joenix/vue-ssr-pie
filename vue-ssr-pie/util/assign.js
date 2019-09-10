module.exports = class assign
{
	constructor ()
	{
		return ( J, O, E, N, I, X ) => {

			return Object.assign.apply(

				null,

				Array.prototype.slice.call( [ J, O, E, N, I, X ] ).filter(

					param => param === undefined ? param : this.filter( param )

				)

			)

		}

	}

	check ( observe, rule = {} )
	{
		rule[ String ] = !!( observe === '' )

		rule[ Array ] = !( observe.length )

		rule[ Object ] = !!( JSON.stringify( observe ) === '{}' )

		rule[ Function ] = !!/^(function(\s+)?\(\)(\s+)?\{\}|\(\)(\s+)?=>(\s+)?\{\})$/.test( observe )

		return rule[ observe.constructor ]

	}

	filter ( observe, group = ['basic', 'client', 'server'] )
	{	
		return group.map(

			( space ) => {

				if ( observe.hasOwnProperty( space ) && this.check( observe[ space ] ) )
				{
					delete observe[ space ]
				}

			}

		),

		observe

	}
}
