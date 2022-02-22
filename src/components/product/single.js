import { Container } from "../container"
import { Gallery } from "../imagemagnify"
import { Text } from "../text"
import { Heart } from "react-feather"
import ImageFirst from '../../assets/take1.jpg'
import ImageSecond from '../../assets/take2.jpg'
import ImageThird from '../../assets/take3.jpg'
import { useHistory } from "react-router-dom"

export const Single = (props) => {
    const history = useHistory()

    const images = [
        {
            img: ImageFirst
        },
        {
            img: ImageSecond
        },
        {
            img: ImageThird
        }
    ]
    return (
        <Container.Simple>
            <Container.Row>
                <Container.Column className="col-lg-6">
                    <Gallery image={images} />
                </Container.Column>
                <Container.Column className="col-lg-6">
                    <div className='ms-5'>
                        <Text className="fs-26">Oversized Quilted Check Curved Hem Overshirt</Text>
                        <Text className="fs-12 text-muted">Product code: AMM15021</Text>
                        <Text className="fs-13 text-danger">30% OFF MENSWEAR!*</Text>
                        <Text className="fs-13 text-danger">99P NEXT DAY DELIVERY!* USE CODE: HURRY I QUICK! ENDS IN 00H 16M 41S</Text>
                        <span className="fs-26 text-danger fw-bold">£24.50 (30% OFF)</span><span className='ms-2 fs-16 text-decoration-line-through'>£35.00</span>
                        <div className='d-flex justify-content-between'>
                            <Text className="fs-12 fw-bold">COLOUR: BEIGE</Text>
                            <Text className="fs-12 text-decoration-underline">See Full Product Details</Text>
                        </div>
                        <Text className="fs-14 fw-bold">AVAILABILITY:
                            <span className='fw-normal'> Select Styles for Availability</span>
                        </Text>
                        <Text className="fw-normal">Quantity</Text>
                        <div className="d-flex justify-content-start">
                            <div className="col-1">
                                <input type="text" className='form-control shadow-none rounded-0' defaultValue={1} />
                            </div>
                            <button className='btn btn-secondary shadow-none rounded-0 btn-block col-9 ms-2' onClick={() => history.push("/cart")}>SELECT UK SIZE</button>
                            <Heart className='ms-2' size={32} />
                        </div>
                    </div>
                </Container.Column>
            </Container.Row>
        </Container.Simple>
    )
}