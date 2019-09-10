module.exports = {
    /* !!
	 * Core ( Vue + Ssr + Express )
	 * ===== ===== =====
	 */

    core: {
        // Vue
        vue: require("vue"),

        // Server Renderer
        ssr: require("vue-server-renderer"),

        // Server Renderer Plugin Server
        ssrPluginServer: require("vue-server-renderer/server-plugin"),

        // Server Renderer Plugin Client
        ssrPluginClient: require("vue-server-renderer/client-plugin"),

        // Vue Loader Plugin
        loaderPlugin: require("vue-loader/lib/plugin"),

        // Vuex
        vuex: require("vuex"),

        // Express
        express: require("express")
    },

    /* !!
	 * Document
	 * ===== ===== =====
	 */
    doc: {
        // Fs
        fs: require("fs"),

        // Fs 拓展
        fse: require("fs-extra"),

        // Fs 记忆
        mfs: require("memory-fs"),

        // Path
        path: require("path"),

        // Unix Path
        upath: require("upath"),

        // Watch Path
        chokidar: require("chokidar"),

        // LRU Cache
        lru: require("lru-cache")
    },

    /* !!
	 * Library
	 * ===== ===== =====
	 */

    lib: {
        // Util: https://nodejs.org/docs/latest/api/util.html
        util: require("util"),

        // Lodash: https://lodash.com/
        lodash: require("lodash")
    },

    /* !!
	 * Webpack
	 * ===== ===== =====
	 */

    webpack: {
        // 依赖构建工具
        webpack: require("webpack"),

        // Webpack 优化
        optimize: require("webpack").optimize,

        // Webpack Config 合并
        merge: require("webpack-merge"),

        // 开发服务器
        dev: require("webpack-dev-middleware"),

        // 代码热更新
        hot: require("webpack-hot-middleware"),

        // 友好报错信息
        err: require("friendly-errors-webpack-plugin"),

        // 缓存
        precache: require("sw-precache-webpack-plugin"),

        // Webpack 排除 Node Modules
        external: require("webpack-node-externals"),

        // Webpack 文本提取
        extractText: require("extract-text-webpack-plugin")
    },

    /* !!
	 * Loader
	 * ===== ===== =====
	 */

    loader: {
        // Vue
        vue: require("vue-loader"),

        // Babel
        babel: require("babel-loader"),

        // Url
        url: require("url-loader"),

        // File
        file: require("file-loader"),

        // Style
        style: require("vue-style-loader"),

        // Css
        css: require("css-loader"),

        // Less
        less: require("less-loader"),

        // Sass
        sass: require("sass-loader"),

        // Script
        script: require("script-loader")
    },

    /* !!
	 * Dev Kit
	 * ===== ===== =====
	 */

    kit: {
        // 依赖加载器
        importz: require("importz"),

        // 命令行 参数传递
        argv: require("cross-env-argv"),

        // 运行 命令行
        npm: require("npm-process"),

        // 简便异步函数
        promisify: require("es6-promisify"),

        // Debug
        debug: require("debug")
    }
};
