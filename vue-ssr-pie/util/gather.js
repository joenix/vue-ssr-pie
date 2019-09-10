module.exports = class gather {
    constructor({ Depend }) {
        return (keys, values, proxy, inject, configure = {}) => {
            keys.map((key, index) => {
                    configure[key] = values[key](proxy);
            });

            // configure.plugins.push(

            // 	new Depend.webpack.webpack.DefinePlugin( inject ),

            // )
            return configure;
        };
    }
};
