const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    "env": {
        "SENDGRID_API_KEY": process.env.SENDGRID_API_KEY
    }
}