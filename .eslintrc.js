module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'@qiuxc',
		'@qiuxc/eslint-config/react',
		'@qiuxc/eslint-config/typescript',
		'@qiuxc/eslint-config/vue',
		'@qiuxc/eslint-config/custom',
	],
};
