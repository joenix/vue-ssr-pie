module.exports = class entry {
    constructor({ Depend, Hook, Util, Root }) {
        return End => {
            return Util.lapse(
                String,

                Util.assign(
                    {
                        client: `${Root}/provide/client.js`,

                        server: `${Root}/provide/server.js`
                    },

                    Hook.Webpack.entry
                )
            )[End];
        }
    }
};
