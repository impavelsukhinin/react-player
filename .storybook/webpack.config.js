const rules = require('../webpack/rules')
const path = require('path')

module.exports = ({ config }) => {
	config.module.rules.push(...rules)
	config.resolve.extensions.push('.ts', '.tsx')
	config.resolve.modules = [
		...(config.resolve.modules || []),
		// path.resolve(__dirname, '../'),
		path.resolve(__dirname, '../src')
	]
	return config
}
