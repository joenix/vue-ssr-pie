module.exports = class run {
    constructor({ Depend, Util, Webpack, Pack }) {
        return (configure = Webpack, injection = {}) =>
            new Promise((resolve, reject) => {
                resolve({
                    client: Depend.webpack.webpack(
                        Util.gather(
                            Pack,

                            configure,

                            "client",

                            injection
                        )
                    ),

                    server: Depend.webpack.webpack(
                        Util.gather(
                            Pack,

                            configure,

                            "server",

                            injection
                        )
                    )
                });
            });
    }
};
