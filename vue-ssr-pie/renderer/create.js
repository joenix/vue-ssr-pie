module.exports = class create {
    constructor({ Depend, Util, Path, Root }) {
        return (
            bundle = Util.resolve(`${Path.dist}/vue-ssr-server-bundle.json`),
            extension
        ) => {
            console.log(`${Path.dist}/vue-ssr-client-manifest.json`);
            return Depend.core.ssr.createBundleRenderer(
                bundle,

                Object.assign(
                    {},

                    extension,

                    {
                        cache: Depend.doc.lru({
                            max: 1000,
                            maxAge: 1000 * 60 * 15
                        }),

                        template: require("fs").readFileSync(
                            `${Root}/index.template.html`,
                            "utf-8"
                        ),

                        basedir: Util.resolve(`${Path.dist}`),

                        clientManifest: require(`${
                            Path.dist
                        }/vue-ssr-client-manifest.json`),

                        runInNewContext: false
                    }
                )
            );
        };
    }
};
