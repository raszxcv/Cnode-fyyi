var path = require('path');
module.exports = {
    //这是一个入口文件(你要编译的文件)
    entry: './src/main.js',
    //编译后输出的路径配置
    output: {
        //目标文件夹
        //编译后的文件名字
        filename: './dist/bundle.js'
    },
    //模块
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ['url-loader']
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        }
    },


}