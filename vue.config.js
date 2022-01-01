
const path = require('path')
const packageData = require('./package.json')

const resolve = function (dir) {
    return path.join(__dirname, dir)
}
const projectName=packageData.name;

let webpackConfig = {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
        alias: {
            '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.json'],
    },
    output: {
        library: `${projectName}-[name]`,
        libraryTarget: "umd",
        jsonpFunction: `webpackJsonp_${projectName}`
    }
}


module.exports = {
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                lessOptions: {
                    javascriptEnabled: true
                },
            },
        },
    },
    publicPath: './',
    lintOnSave: false,
    configureWebpack: webpackConfig
}