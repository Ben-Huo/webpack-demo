const path = require("path");
//  导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 自动生成HTML引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  //   错误追踪
  devtool: "source-map", // + 生成映射源代码文件


  // + 开发服务配置
  devServer: {
    port: 8080 // 默认端口是8080
  },

  
  // css加载器
  module: {
    rules: [
      //   {
      //     test: /\.css$/, // 匹配css扩展名文件
      //     use: [
      //       // 配置loader加载器
      //       "style-loader", // 把css代码写入到网页中
      //       "css-loader" // 读取css的代码
      //     ]
      //   },
      //   // less加载器
      //   {
      //     test: /\.less$/, // 匹配less扩展名文件
      //     use: [
      //       "style-loader", // 把less代码写入到网页中
      //       "css-loader", // 读取less的代码
      //       "less-loader" // 解释编译less代码
      //     ]
      //   },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // 提取css
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          // 提取less
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },
      //   图片加载器
      {
        test: /\.(png|svg|jpg|gif)$/, // 匹配图片文件
        use: [
          {
            loader: "file-loader", // 处理图片文件返回链接
            options: {
              publicPath: "./images/", // 引入图片时会在路径前面加上该选项
              outputPath: "images" //  输出到dist下的images目录
            }
          }
        ]
      }
    ]
  },
  //   引入插件
  plugins: [
    //   提取CSS
    new ExtractTextPlugin("style/style.css"), // 提取到dist的style文件夹中
    // 自动生成HTML
    new HtmlWebpackPlugin({
      template: "public/index.html" // template指定默认html模板
    }),
    // 调用清除打包目录插件
    new CleanWebpackPlugin()
  ]
};
