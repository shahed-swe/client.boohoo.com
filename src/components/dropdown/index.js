import * as D from '@radix-ui/react-dropdown-menu';
import { VscChevronDown } from 'react-icons/vsc/index';
import { keyframes, styled } from '../../stitches.config';

import { Button } from '../button/extra';

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});
const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});
const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});
const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(D.Content, {
    minWidth: '10rem',
    padding: '0.5rem 0',
    fontSize: '1rem',
    color: '$dark',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '0',
    borderRadius: '$xs',
    boxShadow: '0px 10px 50px 0px rgba(0, 0, 0, 0.2)',
    // transition: 'all 150ms linear',
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity',
        '&[data-state="open"]': {
            '&[data-side="top"]': { animationName: slideDownAndFade },
            '&[data-side="right"]': { animationName: slideLeftAndFade },
            '&[data-side="bottom"]': { animationName: slideUpAndFade },
            '&[data-side="left"]': { animationName: slideRightAndFade },
        },
    },
});

const itemStyles = {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '0',
    borderRadius: 3,
    color: '$darkGray',
    display: 'flex',
    fontSize: '$sm',
    fontWeight: '$4',
    lineHeight: 1,
    marginTop: '5px',
    padding: '0.6rem 1.5rem',
    position: 'relative',
    textAlign: 'inherit',
    textDecoration: 'none',
    transition: 'all 150ms linear',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    '&:hover, &:focus, &:active': {
        color: '$darkGray',
        textDecoration: 'none',
        backgroundColor: '$opacityGray2',
        outline: 'none',
    },
    '&[data-disabled]:hover, &[data-disabled]:focus': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
};

const StyledItem = styled(D.Item, { ...itemStyles });
const StyledTriggerItem = styled(D.TriggerItem, {
    '&[data-state="open"]': {
        backgroundColor: '$opacityGray3',
    },
    ...itemStyles,
});

const StyledArrow = styled(D.Arrow, { fill: 'white' });

export const DropdownCaret = styled(VscChevronDown, {
    marginLeft: '30px',
    height: '1.3em',
    width: '1.3em',
    transition: 'all 150ms ease-in-out',
    'svg + &': { ml: 0 },

    [`[aria-haspopup="menu"][data-state="open"] &`]: {
        transform: 'rotate(180deg)',
    },
});
export const DropdownButton = styled(Button, {
    display: 'flex',
    ai: 'center',
    jc: 'center',
    whiteSpace: 'nowrap',
    pl: '$5 !important',
    pr: '$5 !important',
    transform: 'none !important',
});

// Exports
export const DropdownMenu = D.Root;
export const DropdownMenuTrigger = D.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuArrow = StyledArrow;