import { useState, useEffect, useCallback } from 'react'
import { Container } from "../container"
import { Gallery } from "../imagemagnify"
import { Text } from "../text"
import { Requests } from '../../utils/API/index'
import { useHistory } from 'react-router-dom'
import { Loader } from '../loading'
import { Star } from 'react-feather'
import { ToggleGroup, ToggleGroupItem } from '../toggle/index';

export const Single = (props) => {
    const history = useHistory()
    const [productDetail, setProductDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchProduct = useCallback(async (id) => {
        try {
            const response = await Requests.Product.Single(id)
            setProductDetails(response.data)
            setLoading(false)
        } catch (error) {
            if (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (props.product && props.product.id) {
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
        <>
            {loading ? <Loader /> :
                <Container.Simple>
                    <Container.Row>
                        <Container.Column className="col-lg-6">
                            <Gallery image={images} />
                        </Container.Column>
                        <Container.Column className="col-lg-6">
                            <div className='ms-5'>
                                <Text className="fs-12 text-muted text-capitalize">{productDetail.category}</Text>
                                <Text className="fs-26 fw-bold">{productDetail.title}</Text>
                                <Text className="fs-13 text-danger">{productDetail.description}</Text>
                                <span className="fs-26 fw-bold">£{productDetail.price}</span>
                                <div className='d-flex justify-content-between'>
                                    <Text className="fs-12 text-decoration-underline" style={{ cursor: "pointer" }} onClick={() => { history.push(`/product/${productDetail.id}`) }}>See Full Product Details</Text>
                                </div>
                                <Text className="fs-14 fw-bold">AVAILABILITY:
                                    <span className='fw-normal'> Select Styles for Availability</span>
                                </Text>
                                <ToggleGroup
                                    css={{ marginTop: '$5' }}
                                    type='single'
                                    defaultValue='M'
                                    aria-label='Product Size'
                                >
                                    <ToggleGroupItem outlined value='S' aria-label='S'>
                                        S
                                    </ToggleGroupItem>
                                    <ToggleGroupItem outlined value='M' aria-label='M'>
                                        M
                                    </ToggleGroupItem>
                                    <ToggleGroupItem outlined value='L' aria-label='L'>
                                        L
                                    </ToggleGroupItem>
                                    <ToggleGroupItem outlined value='XL' aria-label='XL'>
                                        XL
                                    </ToggleGroupItem>
                                </ToggleGroup>
                                <div className='buttons mt-3'>
                                    <button className='ps-3 pe-3 pt-2 pb-2 border bag' onClick={() => props.handleBusket(productDetail, 1)}>Add To Bag</button>
                                    <button className='ps-3 pe-3 pt-2 pb-2 ms-4 border purchase' onClick={() => {props.handleBusket(productDetail, 1); history.push("/cart")}}>Purchase Now</button>
                                </div>
                                <div className='mt-3'>
                                    <div className="d-flex justify-content-between">
                                        <Text className="mb-0 fs-14">Product Reviews</Text>
                                        <Text className="fs-14"><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /> {`${productDetail.rating.rate}(${productDetail.rating.count})`}</Text>
                                    </div>
                                </div>
                            </div>
                        </Container.Column>
                    </Container.Row>
                </Container.Simple>}
        </>
    )
}