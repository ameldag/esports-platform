module.exports = {
    purge: [],
    theme: {
        extend: {},
    },
    variants: {
        transformOrigin: ['direction'],
        inset: ['direction'],
        textAlign: ['direction'],
        margin: ['responsive', 'direction'],
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('tailwindcss-rtl')
    ],
}