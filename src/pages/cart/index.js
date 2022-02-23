import { useState, useCallback, useEffect } from 'react'
import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Text } from "../../components/text/index"
// images
import { Heart, X } from 'react-feather';
import { Requests } from '../../utils/API/index';
import ProductCategories from '../../components/product/category';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utils/utilities';

const Index = () => {
    const [categories, setCategories] = useState([])
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    // for fetching category
    const fetchCategory = useCallback(async () => {
        try {
            const response = await Requests.Categories.Index()
            setCategories(response.data)
        } catch (error) {
            if (error) {
                console.log(error)
            }
        }

    }, [])

    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

    const getCart = useCallback(() => {
        let price = 0;
        Object.keys(getDatabaseCart()).map((key, index) => {
            const items = JSON.parse(key)
            const val = Object.values(getDatabaseCart())[index]
            price += items.price * val
            return items
        })
        setQuantity(Object.keys(getDatabaseCart()).length)
        setPrice(price)
    }, [])

    // price calculation
    useEffect(() => {
        getCart()
    }, [getCart])


    const handleRemove = (item) => {
        removeFromDatabaseCart(item)
        getCart()
    }

    return (
        <div>
            <Layout>
                <Container.Simple>
                    <Container.Row>
                        <Container.Column>
                            <div className='d-flex justify-content-between'>
                                <Text className="fs-22 m-0">Shopping Bag</Text>
                                <button className='btn btn-danger shadow-none p-0 rounded-0 ps-5 pe-5 pt-1 pb-1'>CHECKOUT</button>
                            </div>
                        </Container.Column>
                        <Container.Column className="mt-2 ">
                            <div className='p-2' style={{ backgroundColor: "#ece0d2" }}>
                                <Text className="fs-20 m-0">FASHIONCLUB PREMIER - £12.99 | UNLIMITED NEXT DAY DELIVERY FOR A YEAR!</Text>
                            </div>
                        </Container.Column>
                        {quantity ? <>
                        <Container.Column className="mt-2" >
                            <div style={{ backgroundColor: "#EFEFEF" }} className="ps-2 pe-2">
                                <Container.Row >
                                    <Container.Column className="col-lg-6">
                                        <Text className="text-dark">ITEM</Text>
                                    </Container.Column>
                                    <Container.Column className="col-lg-6">
                                        <div className='d-flex justify-content-between'>
                                            <Text className="text-dark">QTY</Text>
                                            {/* <Text className="text-dark">PRICE</Text> */}
                                            <Text className="text-dark">TOTAL PRICE</Text>
                                        </div>
                                    </Container.Column>
                                </Container.Row>
                            </div>
                        </Container.Column>
                        <Container.Column>
                            <div className="ps-2 pe-2 mt-3">
                                <Container.Row>
                                    {Object.keys(getDatabaseCart()).map((key, index) => {
                                        const item = JSON.parse(key)
                                        return (
                                            <>
                                                <Container.Column className="col-lg-6 mt-2">
                                                    <div className='d-flex justify-content-start'>
                                                        <img src={item.image} alt="" height={155} width={115} className="me-3" />
                                                        <div className='ms-2'>
                                                            <Text className="fs-14 fw-bolder mb-0">{item.title}</Text>
                                                            <Text className="fs-12 text-muted mb-1 text-capitalize">{item.category}</Text>
                                                            <Text className="fs-12 text-dark mb-0">UK Size: M</Text>
                                                            <div className='d-flex justify-content-start'>
                                                                <span className="fs-12" style={{ cursor: "pointer" }} onClick={() => handleRemove(key)}>
                                                                    <X size={12} className="me-1" />
                                                                    Remove
                                                                </span>
                                                                <Text className="fs-12 ms-3">
                                                                    <Heart size={12} className="me-1" />
                                                                    Add To Wishlist
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Container.Column>
                                                <Container.Column className="col-lg-6">
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex justify-content-start'>
                                                            <input type="text" className='form-control shadow-none' style={{ width: "35px" }} defaultValue={1} />
                                                            <Text className="text-dark ms-2">  YAY! THIS IS IN STOCK</Text>
                                                        </div>

                                                        {/* <Text className="text-dark">£24.50</Text> */}
                                                        <Text className="text-dark">£{Object.values(getDatabaseCart())[index] * item.price}</Text>
                                                    </div>
                                                </Container.Column>
                                            </>
                                        )
                                    })}
                                    
                                    <Container.Column className="mt-2">
                                        <hr />
                                        <div className='d-flex justify-content-end'>
                                            <Text className="me-3">Total Price</Text>
                                            <Text>£{price}</Text>
                                        </div>
                                    </Container.Column>

                                </Container.Row>
                            </div>
                            
                        </Container.Column> 
                        </> : <Container.Column>
                                    <Text className="fs-22 fw-bolder text-center mt-5">Cart is Empty</Text>
                            </Container.Column>}
                        
                    </Container.Row>
                    

                </Container.Simple>
                <Container.Simple>
                    {categories ? <ProductCategories categories={categories} /> : null}
                </Container.Simple>
            </Layout>
        </div>
    )
}

export default Index;