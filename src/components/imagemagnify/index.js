import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { useWindowSize } from '../window/windowSize'
import { Container } from '../container/index'

export const Gallery = (props) => {
    const size = useWindowSize()
    const [largeImage, setLargeImage] = useState(props.image ? props.image[0].img : "")


    return (
        <Container.Simple>
            <Container.Row>
                {/* Small images container */}
                <Container.Column className="col-lg-2">

                    <Container.Row className="d-flex justify-content-start">
                        {props.image && props.image.length ?
                            props.image.map((item, i) =>
                                <div
                                    key={i}
                                    className="border-0 pb-2"
                                    onClick={() => setLargeImage(item.img)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={item.img} className="img-fluid" alt="..." width={size.width < 374 ? "60" : size.width < 380 ? "70" : "80"} height={size.width < 374 ? "60" : size.width < 380 ? "70" : "80"} />
                                </div>
                            ) : null
                        }
                    </Container.Row>

                </Container.Column>
                {/* Large images container */}
                <Container.Column className="col-lg-6">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: '...',
                            src: largeImage,
                            width: size.width <= 1200 ? 300 : 450,
                            height: size.width <= 1200 ? 300 : 450
                        },
                        style: { margin: 'auto' },
                        imageClassName: 'magnifiySmallImage',
                        largeImage: {
                            src: largeImage,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
                    }} />
                </Container.Column>
                
            </Container.Row>
        </Container.Simple>

    );
};