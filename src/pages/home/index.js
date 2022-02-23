import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { PrimaryModal } from '../../components/modals';
import { Product } from '../../components/product/index'
import { Single } from '../../components/product/single';
import { Requests } from "../../utils/API/index"
import { Loader } from '../../components/loading';
import { addToDatabaseCart } from '../../utils/utilities';

const Index = () => {
    const [productshow, setProductShow] = useState({ value: null, show: false })
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])

    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Product.Index()
            if (response.status === 200) {
                setData(response.data)
                setLoading(false)
            }
        } catch (error) {
            if(error){
                console.log(error)
            }
            setLoading(false)
        }
        
    }, [])

    // fetch product
    useEffect(() => {
        fetchData()
    }, [fetchData])


    // handle cart items
    const handleBusket = (product, count) => {

        console.log(product)
        const toBeAddedKey = product.id;
        const sameProduct = cart.length > 0 && cart.find(productItem => productItem.id === toBeAddedKey);
        let newCart;

        if (sameProduct) {
            const others = cart.filter(productItem => productItem.id !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            newCart = [...cart, product]
        }

        addToDatabaseCart(JSON.stringify(product), count);

        setCart(newCart);
    }

    return (
        <div>
            {loading ? <Loader/> : 
            <Layout>
                <Container.Simple>
                    <Container.Row>
                        {data && data.map((item, index) => {
                            return (
                                <Product setProductShow={setProductShow} item={item} key={index} />
                            )
                        })}
                    </Container.Row>

                </Container.Simple>
            </Layout>}
            {productshow.value && productshow.show ? 
            <PrimaryModal
                size="xl"
                show={productshow.show}
                onHide={() => setProductShow({ show: !productshow.show })}
            >
                <Single handleBusket={handleBusket} product={productshow.value}/>
            </PrimaryModal> : null}
        </div>
    );
};

export default Index;