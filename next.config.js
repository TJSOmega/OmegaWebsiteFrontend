const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    "env": {
        "SENDGRID_API_KEY": "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"
    }
}