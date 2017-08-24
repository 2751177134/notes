var htmlWP = require('html-webpack-plugin');
module.exports = {
            entry:'./src/main.js' ,// 路径+文件名 一般为 ./src/xxx.js
            output:{
                    path:__dirname +'/build' ,// 绝对路径 使用__dirname + 路径
                    filename:"build.js" // 一般都为build.js/bundle.js
            },
            module:{
                    loaders:[
                            {
                                    test: /\.css$/,   //打包css文件
                                    loader:'style-loader!css-loader'
                            },
                            {
                                    test: /\.scss$/,    //打包scss文件
                                    loader:'style-loader!css-loader!sass-loader'
                            },
                            {
                                    test: /\.less$/,    //打包less文件
                                    loader:'style-loader!css-loader!less-loader'
                            },
                            {
                                    test: /\.(png|jpg|gif|ttf)$/,       //打包各种格式的图片文件
                                    loader:'url-loader?limit=20000'     //limit=2000限制图片的大小，小于20kb的图片被打包
                                                                        //大于20kb的图片直接被添加在build.js外与该js并列
                            }
                    ]
            },

            plugins:[
                    new htmlWP({
                            title: '首页',  //生成的页面标题
                            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
                            template: 'index1.html' //根据template.html这个模板来生成(这个文件程序员自己书写)
                    })
            ]
    }