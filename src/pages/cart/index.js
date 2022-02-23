import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Text } from "../../components/text/index"
// images
import ImageFirst from '../../assets/take1.jpg'
import { Edit2, Heart } from 'react-feather';

const Index = () => {

    return (
        <div>
            <Layout>
                <Container.Simple className="mt-2">
                    <Container.Row>
                        <Container.Column>
                            <div className='d-flex justify-content-between'>
                                <Text className="fs-22 m-0">Shopping Bag</Text>
                                <button className='btn btn-danger shadow-none p-0 rounded-0 ps-5 pe-5 pt-1 pb-1'>CHECKOUT</button>
                            </div>
                        </Container.Column>
                        <Container.Column className="mt-2 ">
                            <div className='p-2' style={{ backgroundColor: "#ece0d2" }}>
                                <Text className="fs-20 m-0">BOOHOO PREMIER - £12.99 | UNLIMITED NEXT DAY DELIVERY FOR A YEAR!</Text>
                            </div>
                        </Container.Column>
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
                                    {new Array(3).fill().map((_, index) => {
                                        return (
                                            <>
                                                <Container.Column className="col-lg-6 mt-2">
                                                    <div className='d-flex justify-content-start'>
                                                        <img src={ImageFirst} alt="" height={155} width={95} />
                                                        <div className='ms-2'>
                                                            <Text className="fs-14 fw-bolder mb-0">
                                                                Oversized Quilted Check Curved Hem Overshirt</Text>
                                                            <Text className="fs-12 text-muted mb-1">Product code: AMM15021-103-56</Text>
                                                            <Text className="fs-12 text-danger">30% OFF MENSWEAR!*</Text>
                                                            <Text className="fs-12 text-dark">Colour: Beige</Text>
                                                            <Text className="fs-12 text-dark mb-0">UK Size: M</Text>
                                                            <div className='d-flex justify-content-start'>
                                                                <Text className="fs-12">
                                                                    <Edit2 size={12} className="me-1" />
                                                                    Edit Details
                                                                </Text>
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
                                                        <Text className="text-dark">£24.50</Text>
                                                    </div>
                                                </Container.Column>
                                            </>
                                        )
                                    })}

                                </Container.Row>
                            </div>
                        </Container.Column>
                    </Container.Row>

                </Container.Simple>
            </Layout>
        </div>
    )
}

export default Index;