import { useState, useEffect, useCallback } from 'react';
import { Container } from '../../components/container';
import { Text } from '../../components/text';
import { Layout } from '../../components/layout';
import { Loader } from '../../components/loading';
import { useParams } from 'react-router-dom';
import { Requests } from '../../utils/API/index';
import { ProductItem } from '../../components/product/item';
import { Single } from '../../components/product/single';
import "./style.scss"
import ProductCategories from '../../components/product/category';
import { addToDatabaseCart } from '../../utils/utilities';

const ProductShow = () => {

    const [productDetail, setProductDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const params = useParams()
    const [categories, setCategories] = useState([])
    const [cart, setCart] = useState([])

    // for single product fetch
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
        if (params && params.id) {
            fetchProduct(params.id)
        }
    }, [fetchProduct, params])

    // for all product fetch
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Product.Index()
            console.log(response)
            if (response.status === 200) {
                setData(response.data.slice(0, 7))
                setLoading(false)
            }
        } catch (error) {
            if (error) {
                console.log(error)
            }
            setLoading(false)
        }

    }, [])

    // fetch product
    useEffect(() => {
        fetchData()
    }, [fetchData])


    // for fetching category
    const fetchCategory = useCallback(async () => {
        try {
            const response = await Requests.Categories.Index()
            setCategories(response.data)
            setLoading(false)
        } catch (error) {
            if (error) {
                console.log(error)
            }
        }

    }, [])


    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

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
        <>
            {loading ? <Loader /> :
                <Layout>

                    <Container.Simple>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item">Product</li>
                                <li class="breadcrumb-item active text-capitalize" aria-current="page">{productDetail.category}</li>
                            </ol>
                        </nav>
                        <Single product={productDetail} handleBusket={handleBusket}/>
                    </Container.Simple>
                    <Container.Simple>
                        <Container.Column className="mt-5 mb-5">
                            <hr />
                        </Container.Column>
                    </Container.Simple>
                    <Container.Simple>
                        <Container.Row>
                            <Container.Column>
                                <div className="d-flex justify-content-between">
                                    <Text className="fs-22 fw-bolder">Trending Clothes</Text>
                                    <button className="bag ps-3 pe-3 pt-1 pb-1">View all</button>
                                </div>
                                {data && data.map((item, index) => {
                                    return (
                                        <ProductItem handleBusket={handleBusket} productDetail={productDetail} item={item} key={index} />
                                    )
                                })}
                            </Container.Column>
                        </Container.Row>
                    </Container.Simple>
                    <Container.Simple>
                        {categories ? <ProductCategories categories={categories} /> : null}
                    </Container.Simple>
                    
                </Layout>}
        </>

    );
};

export default ProductShow;