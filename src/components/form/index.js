import { styled } from '../../stitches.config';

export const Form = styled('form', {});
export const FormGroup = styled('div', {
    mb: '$2p5',
    position: 'relative',
    width: '100%',
});
export const Input = styled('input', {
    backgroundClip: 'padding-box',
    backgroundColor: 'transparent',
    border: `1px solid rgba(29,37,59,0.5)`,
    boxShadow: 'none',
    color: '$blackState',
    display: 'block',
    fontFamily: '$sans',
    fontWeight: 400,
    lineHeight: '1.42857',
    position: 'relative',
    borderRadius: '$lg',
    fontSize: '$sm',
    height: 'calc(2.25rem + 2px)',
    padding: '10px 18px',
    transition:
        'color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
    width: '100%',

    '&:focus': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        outline: '0',
        borderColor: '$rose5',
    },
    '&::placeholder, &::-webkit-input-placeholder': {
        color: '$gray600',
        opacity: 1,
    },
});