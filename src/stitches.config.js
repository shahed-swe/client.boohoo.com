import { createStitches } from '@stitches/react';

const fontSizeBase = 0.875;

export const {
    styled,
    css,
    theme,
    createTheme,
    getCssText,
    globalCss,
    keyframes,
    config,
} = createStitches({
    theme: {
        fonts: { serif: `'Montagu Slab', serif`, sans: `'Montserrat', sans-serif` },
        fontSizes: {
            base: `${fontSizeBase}rem`, // Assumes the browser default, typically `16px``
            xs: `${fontSizeBase * 0.714}rem`, //0.62475
            sm: `${fontSizeBase * 0.85714286}rem`, //0.75
            lg: `${fontSizeBase * 1.142}rem`, //0.99925
            xl: `${fontSizeBase * 1.428}rem`, //1.2495
            h1: `${fontSizeBase * 2.35714285}rem`, //2.0625
            h2: `${fontSizeBase * 1.9285714}rem`, //1.6875
            h3: `${fontSizeBase * 1.642857}rem`, //1.4375
            h4: `${fontSizeBase * 1.2142857}rem`, //1.0625
            h5: `${fontSizeBase * 0.9285714}rem`, //0.8125
            h6: `${fontSizeBase * 0.8571428}rem`, //0.75
        },
        fontWeights: {
            3: 300,
            4: 400,
            5: 500,
            6: 600,
        },
        lineHeights: {},
        colors: {
            white: `#ffffff`,
            lightBg: `#f5f6fa`,

            gray300: `#e3e3e3`,
            gray400: `#ced4da`,
            gray600: `#6c757d`,

            rose1: '#fff1f2',
            rose2: '#ffe4e6',
            rose3: '#fecdd3',
            rose4: '#fda4af',
            rose5: '#fb7185',
            rose6: '#f43f5e',
            rose7: '#e11d48',
            rose8: '#be123c',
            rose9: '#9f1239',

            black: '#000',
            lightBlack: '#2b3553',
            blackState: '#1d253b',
        },
        space: {
            0: '0px',
            px: '1px',
            '0p5': '0.125rem',
            1: '0.25rem',
            '1p5': '0.375rem',
            2: '0.5rem',
            '2p5': '0.625rem',
            3: '0.75rem',
            '3p5': '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',

            gutterX: '0.75rem',
            gutterY: '0.75rem',
        },
        sizes: {
            0: '0px',
            px: '1px',
            '0p5': '0.125rem',
            1: '0.25rem',
            '1p5': '0.375rem',
            2: '0.5rem',
            '2p5': '0.625rem',
            3: '0.75rem',
            '3p5': '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
        },
        radii: {
            normal: '.25rem',
            xl: '.875rem',
            lg: '.4285rem',
            sm: '.2857rem',
            xs: '.1428rem',
            btn: '30px',
            round: '50%',
            pill: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
        shadows: {
            boxShadow: `0 1px 20px 0px rgba(0, 0, 0, 0.1)`,
            btnBoxShadow: `2px 2px 6px rgba(0, 0, 0, 0.4)`,
        },
    },
    media: {
        xs: '(max-width: 575px)',
        sm: '(576px <= width)',
        md: '(768px <= width)',
        lg: '(992px <= width)',
        xl: '(1200px <= width)',
        xxl: '(1400px <= width)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    utils: {
        p: (value) => ({
            padding: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),

        m: (value) => ({
            margin: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),

        ta: (value) => ({ textAlign: value }),

        fd: (value) => ({ flexDirection: value }),
        fw: (value) => ({ fontWeight: value }),

        ai: (value) => ({ alignItems: value }),
        ac: (value) => ({ alignContent: value }),
        jc: (value) => ({ justifyContent: value }),
        as: (value) => ({ alignSelf: value }),
        fg: (value) => ({ flexGrow: value }),
        fs: (value) => ({ flexShrink: value }),
        fb: (value) => ({ flexBasis: value }),

        bc: (value) => ({
            backgroundColor: value,
        }),
        linearGradient: (value) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),

        br: (value) => ({
            borderRadius: value,
        }),
        btrr: (value) => ({
            borderTopRightRadius: value,
        }),
        bbrr: (value) => ({
            borderBottomRightRadius: value,
        }),
        bblr: (value) => ({
            borderBottomLeftRadius: value,
        }),
        btlr: (value) => ({
            borderTopLeftRadius: value,
        }),

        bs: (value) => ({ boxShadow: value }),

        lh: (value) => ({ lineHeight: value }),

        ox: (value) => ({ overflowX: value }),
        oy: (value) => ({ overflowY: value }),

        pe: (value) => ({ pointerEvents: value }),
        us: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),

        userSelect: (value) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),

        size: (value) => ({
            width: value,
            height: value,
        }),

        appearance: (value) => ({
            WebkitAppearance: value,
            appearance: value,
        }),
        backgroundClip: (value) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
    },
});