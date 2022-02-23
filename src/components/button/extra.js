import { styled } from '../../stitches.config';

export const Button = styled('button', {
    fontFamily: '$serif',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    lh: '$sm',
    fontSize: '$base',
    fw: '$6',
    color: 'white',
    background: '$rose7',
    padding: '12px 30px',
    margin: '4px 1px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    textTransform: 'capitalize',
    userSelect: 'none',
    WebkitAppearance: 'button',
    transition: 'all 0.15s ease',

    '&:hover, &:focus, &:active': {
        textDecoration: 'none',
        outline: '0 !important',
        background: '$rose6',
    },
    '&:hover': { transform: 'translateY(-1px)' },
    '&:active': { boxShadow: 'none', transform: 'translateY(1px)' },
    '&:disabled': { opacity: 0.5, pe: 'none' },
    '& + &': { ml: '$1' },

    variants: {
        outlined: {
            true: {
                color: '$rose7',
                border: '1px solid currentColor',
                padding: '11px 29px',
                background: 'transparent',
                '&:hover, &:active, &:focus': {
                    background: 'transparent',
                },
            },
        },
        block: { true: { display: 'block', width: '100%' } },
    },
});