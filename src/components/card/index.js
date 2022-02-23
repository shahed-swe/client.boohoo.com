import { styled } from '../../stitches.config';

export const Card = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    border: '0',
    background: 'transparent',
    width: '100%',
    marginBottom: '30px',
});
export const CardHeader = styled('div', {
    position: 'relative',
    marginBottom: '0',
    backgroundColor: 'initial',
    padding: '15px 15px 0',
    border: '0',
    color: '$black',
});
export const CardCategory = styled('h5', {
    textTransform: 'capitalize',
    fontSize: '$sm',
    marginBottom: '5px',
    fontWeight: '$3',
    color: '$black',
});
export const CardTitle = styled('h3', {
    marginBottom: '.75rem',
    fontWeight: '$2',
    color: '$mode1',
});
export const CardBody = styled('div', {
    flex: '1 1 auto',
    padding: '15px',
});
export const CardFooter = styled('div', {
    backgroundColor: 'initial',
    border: '0',
    padding: '15px',
});
export const CardDescription = styled('div', { color: '$black' });