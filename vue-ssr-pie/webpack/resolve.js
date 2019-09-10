module.exports = class resolve {
    constructor({ Depend, Hook, Util, Package }) {
        return End =>
            Util.lapse(
                Object,

                Util.assign(
                    {
                        basic: {
                            modules: [`${Package}`]
                        },

                        client: {},

                        server: {
                            // alias: {
                            // 	// 'create-api': './create-api-server.js'
                            // }

                            alias: {
                                // vue: "vue/dist/vue.esm.js"
                                vue$: "vue/dist/vue.esm.js"
                                // 'create-api': './create-api-server.js'
                            }
                        }
                    },

                    Hook.Webpack.resolve
                )
            )[End];
    }
};
