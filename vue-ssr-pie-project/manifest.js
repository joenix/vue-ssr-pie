module.exports = {

	// 访问域名
	uri: 'http://localhost:10800',

	// 接口地址
	api: 'http://api:10800',

	// 接口代理
	proxy: '/apis',

	// 资源
	resource: 'http://static:10800',

	// 版本号
	version: '1.2.3',

	// CDN
	cdn: {

		// 模式
		mode: 'alioss',

		// 配置
		option: {
			region: 'Oss',
			accessKeyId: 'Id',
			accessKeySecret: 'Secret',
			bucket: 'Bucket'
		}

	},

	// 模块名
	modelCode: 'Model',

	// 租户号
	tenantCode: 'Code'
}
