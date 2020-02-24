const path = require('path');
// order can cause breaking changes
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
];
//
module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    before: function(app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  // watch: true, not needed if dev server in use
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?url=false',
          { loader: 'postcss-loader', options: { plugins: postCSSPlugins } }
        ]
      }
    ]
  }
};

/**
Important Note
Hello everyone,

By default, the css-loader will attempt to handle any images we reference in our CSS (e.g. background images, etc...). While this is great in certain situations, for our usage in this course we want to disable this and we'll manage our image files manually. With this in mind, when you list 'css-loader' in your webpack.config.js file you'll want to add an option to the end of it like this 'css-loader?url=false' instead.
For a complete reference, you can also simply use the webpack.config.js file I've added as a resource for this text lesson.
Thanks!
Brad
/-
Hello everyone,

In the following lesson we learn about PostCSS which lets us do things in CSS we wouldn't normally be able to do. By default, your text-editor will be confused by this syntax and will likely show warnings that you have CSS syntax errors. The warning / error messages can be annoying because we know that our code actually works just fine in web browsers because of our PostCSS workflow tools.

If you're like me and are using Visual Studio Code as your text-editor it's very easy to fix this. Open the VS Code settings screen (control + comma on Windows, cmd + comma on Mac) and then click the following icon which can be found towards the top right corner of the app window:


In the file that it opens, paste in the following code:

"files.associations": {
        "*.css": "scss"
}
If it's not the last setting in your file then be sure to include a comma after it, like this:

"files.associations": {
        "*.css": "scss"
},
Now VS Code will understand nested CSS rules as well as simple variable syntax. This won't 100% understand our PostCSS syntax but it gets us 95% of the way there without having to try different community-created extensions. I've been very happy with this setup!

Thanks,
Brad


Quick Note
Hello everyone,

In case we want to host our website at a URL that isn't at the root of a domain (e.g. username.github.io/travel-site vs username.github.io/) we'll want to change the way we reference background image files within our CSS. Essentially, in our previous lesson, when we added the background image to the --testimonials modifier class of .page-section, I recommend you remove the forward slash from the start of the image path.

So instead of this:

background: url('/assets/images/testimonials-bg.jpg') top center no-repeat;

Use this:

background: url('assets/images/testimonials-bg.jpg') top center no-repeat;

This way your code works in a wider variety of hosting situations once you're ready to push the site live to the public.

Thanks!
Brad


Quick Note
Hello everyone,

In case we want to host our website at a URL that isn't at the root of a domain (e.g. username.github.io/travel-site vs username.github.io/) we'll want to change the way we reference background image files within our CSS. Essentially, in our previous lesson, when we added the background image to the --testimonials modifier class of .page-section, I recommend you remove the forward slash from the start of the image path.

So instead of this:

background: url('/assets/images/testimonials-bg.jpg') top center no-repeat;

Use this:

background: url('assets/images/testimonials-bg.jpg') top center no-repeat;

This way your code works in a wider variety of hosting situations once you're ready to push the site live to the public.

Thanks!
Brad
*/
