const path = require('path')
module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))

        config.module
            .rule('js')
            .include
                .add(/package/)
                .end().include.add(/examples/)
                .end()
            .use('babel')
                .loader('babel-loader')
                .tap(options => {
                    // 修改它的选项...
                    return options
                })
    }   
}