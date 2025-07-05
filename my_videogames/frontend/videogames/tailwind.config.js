
/** @type {import('tailwindcss').Config} */

export default {

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            'primary-bg': 'var(--color-primary)',
            'primary-text': 'var(--color-primary-dark)',
            
            'table-bg': 'var(--table-bg-color)',
            'table-header-bg': 'var(--table-header-bg-color)',
            'table-border': 'var(--table-border-color)',
            'table-row-hover-bg': 'var(--table-row-hover-bg-color)',
            'table-text': 'var(--table-text-color)'
        },
        },
    },
    plugins: [],
}