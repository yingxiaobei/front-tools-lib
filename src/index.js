let moduleExports = {}

const requireContext = require.context('./', true, /^\.\/.+\/.+\.js$/)
requireContext.keys().forEach(key => {
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
    moduleExports[attr] = requireContext(key)
})

module.exports = moduleExports
