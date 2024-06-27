const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const glob = require('glob')

const list = {}

async function makeList (dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)

  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
}

makeList('components/lib', list)

module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      // 确保 rules 是一个数组
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve('node_modules/.cache/vue-loader')
            }
          },
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
      //   {
      //     test: /\.js$/,
      //     use: [
      //       {
      //         loader: 'babel-loader'
      //       }
      //     ],
      //     exclude: /node_modules/
      //   },
      //   {
      //     test: /\.scss$/,
      //     use: ['vue-style-loader', 'css-loader', 'sass-loader']
      //   },
      //   {
      //     test: /\.(png|jpg|gif|svg)$/,
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]?[hash]'
      //     }
      //   }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}
