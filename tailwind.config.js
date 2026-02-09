/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                blobFloat: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(30px, 30px)' },
                },
            },
            animation: {
                blobFloat: 'blobFloat 10s infinite alternate',
                'spin-slow': 'spin 15s linear infinite',
            },
        },
    },
    plugins: [],
}
