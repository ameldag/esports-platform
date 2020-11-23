module.exports = {
    purge: [],
    theme: {
        extend: {},
    },
    variants: {
        transformOrigin: ['direction'],
        inset: ['direction'],
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('tailwindcss-rtl'),
        require('tailwindcss-dir')(),
    ],
}