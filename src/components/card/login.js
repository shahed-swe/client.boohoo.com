import { Card, CardHeader, CardTitle } from '../card/index';
import { styled } from '../../stitches.config';

export const LoginCard = styled(Card, {
    background: '$white',
    br: '$lg',
    pb: '0.7rem',
    overflow: 'hidden',
});
export const LoginHeader = styled(CardHeader, {
    padding: '0',
    overflow: 'hidden',
});
export const LoginTitle = styled(CardTitle, {
    position: 'absolute',
    fontSize: '5em',
    fontWeight: '900',
    color: '#fff',
    textTransform: 'lowercase',
    marginLeft: '-5px',
    zIndex: '1',
    top: -10,
});