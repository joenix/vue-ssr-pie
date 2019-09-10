module.exports = class plugins {
    constructor({ Depend, Argv, Hook, Util }) {
        return End =>
            Util.lapse(
                Array,

                Util.assign(
                    // {
                    //
                    // 	basic: [
                    //
                    // 			new Depend.loader.vue.VueLoaderPlugin()
                    //
                    // 		].concat(
                    //
                    // 			Util.mode.dev ? new Depend.webpack.err() : [
                    //
                    // 				// new Depend.webpack.optimize.UglifyJsPlugin({
                    // 				// 	compress: { warnings: false }
                    // 				// }),
                    //
                    // 				new Depend.webpack.optimize.ModuleConcatenationPlugin(),
                    //
                    // 				new Depend.webpack.extractText({
                    // 					filename: 'common.[chunkhash].css'
                    // 				})
                    //
                    // 			]
                    //
                    // 		),
                    //
                    // 	client: [
                    //
                    // 			new Depend.webpack.webpack.DefinePlugin({
                    // 				'process.env.NODE_ENV': Argv.env,
                    // 				'process.env.VUE_ENV': '"client"'
                    // 			}),
                    //
                    // 			// new Depend.webpack.optimize.CommonsChunkPlugin({
                    // 			//
                    // 			// 	name: 'vendor',
                    // 			//
                    // 			// 	minChunks ( module )
                    // 			// 	{
                    // 			// 		return (
                    // 			// 			/node_modules/.test( module.context ) && !/\.css$/.test( module.request )
                    // 			// 		)
                    // 			// 	}
                    // 			//
                    // 			// }),
                    //
                    // 			// new Depend.webpack.optimize.CommonsChunkPlugin({
                    // 			// 	name: 'manifest'
                    // 			// }),
                    //
                    // 			new Depend.core.ssrPluginClient()
                    //
                    // 		].concat(
                    //
                    // 			Util.mode.dev ?
                    //
                    // 				[] :
                    //
                    // 				new Depend.webpack.precache({
                    // 					cacheId: 'vue-hn',
                    // 					filename: 'service-worker.js',
                    // 					minify: true,
                    // 					dontCacheBustUrlsMatching: /./,
                    // 					staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
                    // 					runtimeCaching: [
                    // 						{
                    // 							urlPattern: '/',
                    // 							handler: 'networkFirst'
                    // 						},
                    // 						{
                    // 							urlPattern: /\/(top|new|show|ask|jobs)/,
                    // 							handler: 'networkFirst'
                    // 						},
                    // 						{
                    // 							urlPattern: '/item/:id',
                    // 							handler: 'networkFirst'
                    // 						},
                    // 						{
                    // 							urlPattern: '/user/:id',
                    // 							handler: 'networkFirst'
                    // 						}
                    // 					]
                    // 				})
                    //
                    // 		),
                    //
                    // 	server: [
                    //
                    // 			new Depend.webpack.webpack.DefinePlugin({
                    // 				'process.env.NODE_ENV': Argv.env,
                    // 				'process.env.VUE_ENV': '"server"'
                    // 			}),
                    //
                    // 			new Depend.core.ssrPluginServer()
                    //
                    // 		]
                    //
                    // },

                    {
                        basic: [
                            /* Basic Plugins */
                            // new Depend.webpack.extractText({
                            //
                            // 	filename: 'common.[chunkhash].css'
                            //
                            // })
                        ],

                        client: [
                            new Depend.core.ssrPluginClient(),

                            new Depend.core.loaderPlugin()
                        ],

                        server: [
                            new Depend.core.ssrPluginServer(),

                            new Depend.core.loaderPlugin()
                        ]
                    },

                    Hook.Webpack.plugins
                )
            )[End];
    }
};
