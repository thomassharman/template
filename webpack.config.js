const path = require('path'); // Node.js module to resolve paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
    // 1. Mode: Set development or production optimizations
    mode: 'development', // 'production' for optimized, minified output

    // 2. Entry: Where Webpack starts building its dependency graph
    entry: './src/index.js', // Assumes your main JS is in src/index.js

    // 3. Output: Where bundled files are placed and named
    output: {
        filename: 'bundle.js', // Name of the main bundled JS file
        path: path.resolve(__dirname, 'dist'), // Output directory (absolute path to 'dist')
        clean: true, // Cleans the 'dist' folder before each build (good practice)
    },

    // 4. DevServer: Configuration for webpack-dev-server
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Serve static files from 'dist'
        },
        open: true, // Opens the browser automatically when server starts
        hot: true, // Enables Hot Module Replacement (HMR) - updates modules without full page reload
        port: 8080, // Specify a port (default is 8080)
    },

    // 5. Plugins: Perform tasks that loaders can't
    plugins: [
        // HtmlWebpackPlugin: Generates an HTML file and injects your bundled JS
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML template file
            filename: 'index.html', // Output HTML file name in the 'dist' folder
            // inject: 'body', // Where to inject the script tag (default is body)
        }),
    ],

    // 6. Module Rules (Loaders): How to handle different file types
    module: {
        rules: [
            {
                test: /\.css$/i, // Regex: Matches files ending with .css
                use: ['style-loader', 'css-loader'], // Loaders to apply (right-to-left order)
            },
            // Example for images (if you need to process images with webpack)
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource', // Webpack 5 built-in asset management
            // },
            // Example for Babel (if you're using modern JS features not supported by older browsers)
            // {
            //   test: /\.m?js$/,
            //   exclude: /(node_modules|bower_components)/,
            //   use: {
            //     loader: 'babel-loader',
            //     options: {
            //       presets: ['@babel/preset-env']//     }
            //   }
            // }
        ],
    },
};