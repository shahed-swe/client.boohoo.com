import {useState, useEffect, useCallback} from 'react'
import { Container } from "../container"
import { Gallery } from "../imagemagnify"
import { Text } from "../text"
import { Requests } from '../../utils/API/index'
import { useHistory } from 'react-router-dom'

export const Single = (props) => {
    const history = useHistory()
    const [productDetail, setProductDetails] = useState({})

    const fetchProduct = useCallback(async(id) => {
        const response = await Requests.Product.Single(id)
        setProductDetails(response.data)
    },[])

    useEffect(() => {
        if(props.product && props.product.id){
            fetchProduct(props.product.id)
        }
    }, [fetchProduct, props])

    const images = [
        {
            img: productDetail.image
        },
        {
            img: productDetail.image
        },
        {
            img: productDetail.image
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
                        <Text className="fs-26">{productDetail.title}</Text>
                        <Text className="fs-12 text-muted">{productDetail.category}</Text>
                        <Text className="fs-13 text-danger">{productDetail.description}</Text>
                        <span className="fs-26 text-danger fw-bold">£{productDetail.price}</span>
                        <div className='d-flex justify-content-between'>
                            <Text className="fs-12 fw-bold">COLOUR: BEIGE</Text>
                            <Text className="fs-12 text-decoration-underline" style={{cursor:"pointer"}} onClick={() => {history.push(`/product/${productDetail.id}`)}}>See Full Product Details</Text>
                        </div>
                        <Text className="fs-14 fw-bold">AVAILABILITY:
                            <span className='fw-normal'> Select Styles for Availability</span>
                        </Text>
                        <div className='d-flex justify-content-start'>
                            <div className='border p-2 ps-3 pe-3 color'>
                                <Text className="m-0">S</Text>
                            </div>
                            <div className='border p-2 ps-3 pe-3 ms-3 selected-color'>
                                <Text className="m-0">M</Text>
                            </div>
                            <div className='border p-2 ps-3 pe-3 ms-3 color'>
                                <Text className="m-0">L</Text>
                            </div>
                            <div className='border p-2 ps-3 pe-3 ms-3 color'>
                                <Text className="m-0">XL</Text>
                            </div>
                        </div>
                        <div className='buttons mt-3'>
                            <button className='ps-3 pe-3 pt-2 pb-2 border bag'>Add To Bag</button>
                            <button className='ps-3 pe-3 pt-2 pb-2 ms-4 border purchase'>Purchase Now</button>
                        </div>
                    </div>
                </Container.Column>
            </Container.Row>
        </Container.Simple>
    )
}