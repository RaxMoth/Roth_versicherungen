/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#C8281A',
                    'red-dark': '#9E1F14',
                    'red-soft': '#F3DDD9',
                    ink: '#1F1B17',
                    ink2: '#3A332C',
                    paper: '#FFFFFF',
                    page: '#FAF8F5',
                    line: '#E8E2D8',
                },
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif',
                ],
                serif: [
                    '"Source Serif Pro"',
                    '"Playfair Display"',
                    'Georgia',
                    'serif',
                ],
            },
            boxShadow: {
                card: '0 1px 3px rgba(31, 27, 23, 0.06), 0 8px 24px rgba(31, 27, 23, 0.04)',
                'card-hover':
                    '0 4px 12px rgba(31, 27, 23, 0.08), 0 24px 48px rgba(31, 27, 23, 0.08)',
            },
        },
    },
    plugins: [],
}
