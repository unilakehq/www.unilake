module.exports = {
    content: ["./**/*.{html,js,mjs,md,cshtml,razor,cs}", "./Pages/**/*.{cshtml,razor}"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'sm': '400px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1440px',
                '3xl': '1920px'
            },
            colors: {
                faded: '#677575',
                body: '#C1C5C0',
                neutral: '#F9F8F6',
                brand: '#FF6849',
                headlines: '#F9F8F6',
                bgNeutarl: '#DDDFDA',
                neutralSecondary: '#E7E7E7',
                bravo: '#1A76FF',
                textSecondary:'#4A494D',
                onBrand: '#E03C18',
                success: '#6B9E32',
                backgroundSecondary: '#F8F7F3',
                backgroundTertiary:'#F8F8F8'
            },
            boxShadow: {

            },
            fontSize: {
                Medium: ['16px', { lineHeight: '19.36px', fontWeight: '500' }],
                H5: ['18px', { lineHeight: '21.78px', fontWeight: '500' }],
                H4: ['24px', { lineHeight: '29.05px', fontWeight: '600' }],
                H3: ['32px', { lineHeight: '38.73px', fontWeight: '600' }],
                H2: ['20px', { lineHeight: '21.78px', fontWeight: '700' }],
                Regular: ['16px', { lineHeight: '28px', fontWeight: '400' }],
                Small: ['12px', { lineHeight: '24px', fontWeight: '400' }],
                large: ['20px', { lineHeight: '32px', fontWeight: '700' }],
                Bold: ['16px', { lineHeight: '18px', fontWeight: '700' }],
                14: ['14px', { lineHeight: '24px', fontWeight: '600' }],
                15: ['40px', { lineHeight: '44px', fontWeight: '700' }],
                16: ['24px', { lineHeight: '32px', fontWeight: '700' }],
            },
            fontFamily: {
                inter: 'Inter , sans-serif'
            },
            width: {
                full: '100%',
                ArrowForward: '10.67px',
                Tag: '73px',
            },
            height: {
                Tag: '27px',
                ArrowForward: '10.67px'
            },
            top: {
                ArrowForward: '2.67px'
            },
            left: {
                ArrowForward: '2.67px'
            },
            borderWidth: {
                DEFAULT: '1px',
                Tag: '1px'
            },
            borderRadius: {
                DEFAULT: '0.25rem',
                XXS: '2px',
                XS: '4px',
                S: '8px',
                SM: '12px',
                M: '16px',
                L: '24px',
                XL: '32px',
                XXL: '64px',
                XXXL: '112px'
            },
            padding: {
                XXS: '2px',
                XS: '4px',
                S: '8px',
                SM: '12px',
                M: '16px',
                L: '24px',
                XL: '32px',
                XXL: '64px',
                XXXL: '112px'
            },
            spacing: {
                XXS: '2px',
                XS: '4px',
                S: '8px',
                SM: '12px',
                M: '16px',
                L: '24px',
                XL: '32px',
                XXL: '64px',
                XXXL: '112px',
            },
            transitionDuration: {
                '2000': '2000ms',
            }
        }
    },
    plugins: [],
}

