module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential', //
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/eslint-config-prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
	},
};
