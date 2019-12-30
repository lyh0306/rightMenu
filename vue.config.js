const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
function resolve (dir) {
    return path.join(__dirname, './', dir)
}
module.exports = {
    devServer: {
        host: '192.168.0.124',
        port: 9099,
        https: false,
    },
    baseUrl: '/price',
    transpileDependencies: ['webpack-dev-server/client'],
    configureWebpack: {
        plugins: [
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new CopyWebpackPlugin([
                { from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml' },
                { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf' },
                { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js', to: 'js/' }
            ])
        ]
    },
    chainWebpack: config => {
        config.entry.app = ['./src/main.js'];
        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    }
};
