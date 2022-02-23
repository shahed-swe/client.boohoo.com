import { styled, css } from '../../stitches.config';
import { Container } from '../container/extra'

const transition2 = css({ transition: 'all 300ms ease 0s' });
export const NavbarBrand = styled('a', {
    position: 'relative',
    py: '0.3125rem',
    color: '$blackState',
    marginLeft: '17px',
    textTransform: 'uppercase',
    fontFamily: '$serif',
    fontSize: '1rem',
    fontWeight: '$6',
    display: 'inline-block',
    marginRight: '.9375rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    '&:hover, &:focus': { textDecoration: 'none' },
});
export const NavWrapper = styled('div', { display: 'flex', ai: 'center' });
export const NavItemContainer = styled('li', {
    px: 10,
    my: 'auto',
    position: 'relative',
});
export const NavItem = styled('div', transition2, {
    cursor: 'pointer',
    color: '$blackState',
    display: 'inline-flex',
    ai: 'center',
    padding: '.5rem 0',
    textDecoration: 'none',
});
export const NavItemIcon = styled('svg', { size: '$5', verticalAlign: 'middle' });
export const NavItemText = styled('p', {
    display: 'inline-block',
    textTransform: 'uppercase',
    marginLeft: '7px',
    marginBottom: 0,
    fontWeight: '$4',
    userSelect: 'none',
    color: 'inherit',
});
export const NavbarToggler = styled('button', {
    all: 'unset',
    display: 'inline-block',
    outline: 'none',
    cursor: 'pointer',
    padding: '.25rem',
    backgroundColor: 'initial',
    WebKitAppearance: 'button',
    overflow: 'visible',
    margin: '0',
    color: '$black',

    '& svg': { size: '$6' },
});
export const NavbarNav = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '0',
    listStyle: 'none',
});
export const NavbarCollapse = styled('div', transition2, {
    flexBasis: '100%',
    flexGrow: 1,
    alignItems: 'center',
    overflow: 'hidden',
    opacity: 1,
    maxHeight: '100vh',
});
export const Navbar = styled('nav', transition2, {
    width: '100%',
    zIndex: 1050,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '.75rem .9375rem',
    position: 'absolute',
    background: '$lightBg',
    top: 0,
    right: 0,
    left: 0,
    jc: 'space-between',
    borderBottom: '1px solid $gray600',

    [`& > ${Container}`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    variants: {
        expand: {
            default: {
                flexFlow: 'row nowrap',
                justifyContent: 'flex-start',
                [`& ${NavbarNav}`]: { flexDirection: 'row' },
                [`& ${NavItem}`]: { px: '0.5rem' },
                [`& ${NavbarCollapse}`]: { display: 'flex !important', flexBasis: 'auto' },
                [`& ${NavbarToggler}`]: { display: 'none' },
                [`& > ${Container}`]: { flexWrap: 'nowrap' },
                [`& ${NavbarNav} ${NavItem} ${NavItemIcon}`]: { mx: 'unset' },
            },
            sm: {
                '@sm': {
                    flexFlow: 'row nowrap',
                    justifyContent: 'flex-start',
                    [`& ${NavbarNav}`]: { flexDirection: 'row' },
                    [`& ${NavItem}`]: { px: '0.5rem' },
                    [`& ${NavbarCollapse}`]: { display: 'flex !important', flexBasis: 'auto' },
                    [`& ${NavbarToggler}`]: { display: 'none' },
                    [`& > ${Container}`]: { flexWrap: 'nowrap' },
                    [`& ${NavbarNav} ${NavItem} ${NavItemIcon}`]: { mx: 'unset' },
                },
            },
            md: {
                '@md': {
                    flexFlow: 'row nowrap',
                    justifyContent: 'flex-start',
                    [`& ${NavbarNav}`]: { flexDirection: 'row' },
                    [`& ${NavItem}`]: { px: '0.5rem' },
                    [`& ${NavbarCollapse}`]: { display: 'flex !important', flexBasis: 'auto' },
                    [`& ${NavbarToggler}`]: { display: 'none' },
                    [`& > ${Container}`]: { flexWrap: 'nowrap' },
                    [`& ${NavbarNav} ${NavItem} ${NavItemIcon}`]: { mx: 'unset' },
                },
            },
            lg: {
                '@lg': {
                    flexFlow: 'row nowrap',
                    justifyContent: 'flex-start',
                    [`& ${NavbarNav}`]: { flexDirection: 'row' },
                    [`& ${NavItem}`]: { px: '0.5rem' },
                    [`& ${NavbarCollapse}`]: { display: 'flex !important', flexBasis: 'auto' },
                    [`& ${NavbarToggler}`]: { display: 'none' },
                    [`& > ${Container}`]: { flexWrap: 'nowrap' },
                    [`& ${NavbarNav} ${NavItem} ${NavItemIcon}`]: { mx: 'unset' },
                },
            },
            xl: {
                '@xl': {
                    flexFlow: 'row nowrap',
                    justifyContent: 'flex-start',
                    [`& ${NavbarNav}`]: { flexDirection: 'row' },
                    [`& ${NavItem}`]: { px: '0.5rem' },
                    [`& ${NavbarCollapse}`]: { display: 'flex !important', flexBasis: 'auto' },
                    [`& ${NavbarToggler}`]: { display: 'none' },
                    [`& > ${Container}`]: { flexWrap: 'nowrap' },
                    [`& ${NavbarNav} ${NavItem} ${NavItemIcon}`]: { mx: 'unset' },
                },
            },
        },
    },
});