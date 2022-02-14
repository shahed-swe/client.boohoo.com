import React from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layout';
import { Product } from '../../components/product'

const index = () => {
    return (
        <div>
            <Layout>
                <Container.Simple>
                    <Container.Row>
                        {new Array(10).fill().map(() => {
                            return (
                                <Product />
                            )
                        })}
                    </Container.Row>

                </Container.Simple>
            </Layout>
        </div>
    );
};

export default index;