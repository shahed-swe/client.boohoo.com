import { ProductCategory, ProductCategoryCard } from '../card/product';
import { Figure, FigureCaption, FigureImg } from '../image/index';
import placeholder from '../../assets/cat.jpg';
import { Flex } from '../flex/index';
import {H3 } from '../typography/index';
import { Button } from '../button/extra';
import { Container } from '../container';
import { Link } from 'react-router-dom';

const ProductCategories = ({ categories }) => {
    return (
        <ProductCategory css={{ marginTop: '$4' }}>
            <Flex justify='between' align='center' css={{ marginBottom: '$4' }}>
                <H3 css={{ marginBottom: 0 }}>Shop by categories</H3>
                <Button outlined>View all</Button>
            </Flex>
            <Container.Row>
                {categories.map((category) => (
                    <Container.Column className="col-lg-3 col-md-4 col-sm-6" key={category}>
                        <ProductCategoryCard>
                            <Link to={`/category/${category}`}>
                                <Figure>
                                    <FigureImg src={placeholder} alt='Product Image' />
                                    <FigureCaption>{category}</FigureCaption>
                                </Figure>
                            </Link>
                        </ProductCategoryCard>
                    </Container.Column>
                ))}
            </Container.Row>
        </ProductCategory>
    );
};

export default ProductCategories;