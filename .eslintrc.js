module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		'plugin:prettier/recommended',
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [
		"react",
		"@typescript-eslint"
	],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
		"indent": [
			"warning",
			"tab"
		],
		"linebreak-style": [
			"warning",
			"windows"
		],
		"quotes": [
			"warning",
			"double"
		],
		"semi": [
			"warning",
			"always"
		]
	}
};
