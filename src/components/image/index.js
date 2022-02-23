import { styled } from '../../stitches.config';

export const Image = styled('img', {
    variants: {
        fluid: { true: { maxWidth: '100%', height: 'auto' } },
        center: { true: { display: 'block', marginLeft: 'auto', marginRight: 'auto' } },
    },
});

export const FigureImg = styled('img', {
    backfaceVisibility: 'hidden',
    objectFit: 'cover',
    transition: 'all 0.5s',
    height: "50%",
    width: "100%"
});
export const FigureCaption = styled('figcaption', {
    fontFamily: '$serif',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 20%)',
    fontSize: '1.7rem',
    textAlign: 'center',
    opacity: 0,
    transition: 'all .5s',
    backfaceVisibility: 'hidden',
    textTransform: 'capitalize',
});
export const Figure = styled('figure', {
    display: 'inline-block',
    position: 'relative',

    [`&:hover ${FigureCaption}`]: { opacity: 1, transform: 'translate(-50%, -50%)' },
    [`&:hover ${FigureImg}`]: { filter: 'blur(3px) brightness(80%)' },
});