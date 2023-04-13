// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const config = {
	overrides: [
		{
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: path.join(__dirname, "tsconfig.json"),
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: path.join(__dirname, "tsconfig.json"),
	},
	plugins: ["@typescript-eslint"],
	extends: ["plugin:@typescript-eslint/recommended"],
	rules: {
		// "@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		eqeqeq: ["on", "smart"],
		"react/no-unescaped-entities": ["warn", { forbid: ["'"] }],
		"react-hooks/exhaustive-deps": "error",
		"prettier/prettier": ["off"],
		"import/order": ["error"],
		"no-return-await": "error",
		"no-labels": ["off"],
		"no-unused-labels": ["warn"],
		"@typescript-eslint/ban-ts-comment": ["off"],
		"@typescript-eslint/no-var-requires": ["error"],
		"@typescript-eslint/no-non-null-assertion": "off",
	},
};

module.exports = config;
