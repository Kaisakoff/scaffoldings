const { root } = require('./config/helpers');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: root(),
  entry: {
    'main': './src/app/main.js',
    'home': './src/app/home.js',
    'clients': './src/app/clients.js',
    'map': './src/app/map.js',
    'login': './src/app/login.js',
  },
  output: {
    path: root('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // TODO: * add babel.config.js, and remove inline options from here
              // TODO: **** add 'optional chaining' (elvis operator) plugin and use new syntax
              presets: [
                ['@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {
                      version: '3.9.0',
                    },
                    targets: {
                      browsers: [
                        '>0.25%',
                        'not ie 11',
                        'not op_mini all',
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            // TODO: * load as file
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          // TODO: ** postcss-loader
          // TODO: **** postcss-config.js remove all comments with cssnano
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            // TODO: * load as file
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          // TODO: ** postcss-loader
          // TODO: **** postcss-config.js remove all comments with cssnano
          {
            loader: 'sass-loader',
          },
        ],
      },
      // TODO: *** font loader (file-loader) + add fonts you like via file
      // TODO: *** or just add Google Fonts
      // TODO: *** image loader (file-loader or url-loader) + add image in css (scss)
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin(
      {
        chunks: [
          'main',
          'home',
        ],
        template: 'src/home.html',
        filename: 'home.html'
      },
    ),
    new HtmlWebpackPlugin(
      {
        chunks: [
          'main',
          'clients',
        ],
        template: 'src/clients.html',
        filename: 'clients.html'
      },
    ),
    new HtmlWebpackPlugin(
      {
        chunks: [
          'main',
          'login',
        ],
        template: 'src/login.html',
        filename: 'login.html'
      },
    ),
    new HtmlWebpackPlugin(
      {
        chunks: [
          'main',
          'map',
        ],
        template: 'src/map.html',
        filename: 'map.html'
      },
    ),
  ],
};