import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

export const H1 = styled('h1', {
    color: '$blackState',
    fontSize: '$h1',
    fontFamily: '$serif',
    lineHeight: 1.05,
    marginBottom: '30px',
    fontWeight: '$6',
});
export const H2 = styled('h2', {
    color: '$blackState',
    fontFamily: '$serif',
    fontSize: '$h2',
    marginBottom: '30px',
    lineHeight: 1.2,
    fontWeight: '$6',
});
export const H3 = styled('h3', {
    color: '$blackState',
    fontFamily: '$serif',
    fontSize: '$h3',
    marginBottom: '30px',
    lineHeight: '1.4em',
    fontWeight: '$6',
});
export const H4 = styled('h4', {
    color: '$blackState',
    fontFamily: '$serif',
    fontSize: '$h4',
    lineHeight: '1.45em',
    marginBottom: '15px',
    fontWeight: '$6',
});
export const H5 = styled('h5', {
    color: '$blackState',
    fontFamily: '$serif',
    fontSize: '$h5',
    lineHeight: '1.4em',
    marginBottom: '15px',
    fontWeight: '$6',
});
export const H6 = styled('h6', {
    color: '$blackState',
    fontFamily: '$serif',
    fontSize: '$h6',
    textTransform: 'uppercase',
    fontWeight: '$6',
    marginBottom: '0.5rem',
});
export const P = styled('p', {
    color: '$blackState',
    marginBottom: '5px',
    variants: { lead: { true: { fontSize: '$lead', fontWeight: '$3' } } },
});
export const A = styled(Link, {
    fontWeight: 300,
    textDecoration: 'none',
    color: '$black',
    '&:hover, &:focus': { color: '$black' },

    variants: {
        underline: {
            true: {
                '&:hover': { textDecorationLine: 'underline', textUnderlineOffset: '2px' },
            },
        },
    },
});
export const Span = styled('span', {});