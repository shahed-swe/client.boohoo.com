import { styled, theme } from '../../stitches.config';

export const Container = styled('div', {
    width: '100%',
    paddingLeft: theme.space.gutterX,
    paddingRight: theme.space.gutterX,
    mx: 'auto',
    variants: {
        variant: {
            default: {
                '@sm': { maxWidth: '540px' },
                '@md': { maxWidth: '720px' },
                '@lg': { maxWidth: '960px' },
                '@xl': { maxWidth: '1140px' },
                '@xxl': { maxWidth: '1320px' },
            },
            fluid: {},
            sm: {
                '@sm': { maxWidth: '540px' },
                '@md': { maxWidth: '720px' },
                '@lg': { maxWidth: '960px' },
                '@xl': { maxWidth: '1140px' },
                '@xxl': { maxWidth: '1320px' },
            },
            md: {
                '@md': { maxWidth: '720px' },
                '@lg': { maxWidth: '960px' },
                '@xl': { maxWidth: '1140px' },
                '@xxl': { maxWidth: '1320px' },
            },
            lg: {
                '@lg': { maxWidth: '960px' },
                '@xl': { maxWidth: '1140px' },
                '@xxl': { maxWidth: '1320px' },
            },
            xl: { '@xl': { maxWidth: '1140px' }, '@xxl': { maxWidth: '1320px' } },
            xxl: { '@xxl': { maxWidth: '1320px' } },
        },
        g: {
            0: { $space$gutterX: '0' },
            1: { $space$gutterX: '.25rem' },
            2: { $space$gutterX: '.5rem' },
            3: { $space$gutterX: '1rem' },
            4: { $space$gutterX: '1.5rem' },
            5: { $space$gutterX: '3rem' },
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});