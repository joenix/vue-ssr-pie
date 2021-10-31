module.exports = class mode
{
	constructor ({ Argv })
	{
		return ( env = Argv.env ) => {

			return {

				dev:  env === 'development',

				prod: env === 'production'

			}

		}
	}
}
