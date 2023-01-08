module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"space-before-function-paren": ["error"],
		"object-curly-spacing": ["error", "always"],
		"no-trailing-spaces": ["error"],
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
		"eol-last": ["error", "always"],
		// "react/react-in-jsx-scope": "off"
		"react/prop-types": "off"
	}
}
