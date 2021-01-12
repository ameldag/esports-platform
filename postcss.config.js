const purgecss = require("@fullhuman/postcss-purgecss")({
    // paths to all of the template files in the project
    content: ['./app/**/*.html.erb'],
    // options: {
    //     whitelist: ["dir", "rtl", "ltr"],
    // },
    // default extractor including tailwind's special characters
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-flexbugs-fixes'),
        require('tailwindcss')('./app/javascript/css/tailwind.js'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009'
            },
            stage: 1,
            features: {
                'focus-within-pseudo-class': false
            }
        }),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
}