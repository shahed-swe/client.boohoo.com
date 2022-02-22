import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { PrimaryModal } from '../../components/modals';
import { Product } from '../../components/product/index'
import { Single } from '../../components/product/single';
import { Requests } from "../../utils/API/index"

const Index = () => {
    const [productshow, setProductShow] = useState({ value: null, show: false })
    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        const response = await Requests.Product.Index()
        console.log(response)
        if (response.status === 200) {
            setData(response.data)
        }
    }, [])

    // fetch product
    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
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
            </Layout>
            <PrimaryModal
                size="xl"
                show={productshow.show}
                onHide={() => setProductShow({ show: !productshow.show })}
            >
                <Single />
            </PrimaryModal>
        </div>
    );
};

export default Index;