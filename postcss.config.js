module.exports = {
    plugins: [
        require("postcss-import"),
        require('tailwindcss')("./tailwind.config.js"),
        require('autoprefixer'),
        require('postcss-sort-media-queries'),
		...(process.env.JEKYLL_ENV == 'production'
		  ? [require('cssnano')({ preset: 'default' })]
		  : [])
    ]
}