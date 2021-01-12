module.exports = {
    purge: [],
    theme: {
        extend: {},
    },
    variants: {
        margin: ['responsive']
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('tailwindcss-rtl')
    ],
}