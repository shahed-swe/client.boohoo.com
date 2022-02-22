import React from 'react';
import { Text } from '../text';
import "./style.scss"
import { useHistory } from 'react-router-dom';

export const Product = (props) => {
    const history = useHistory()
    const { category, image, price, title } = props.item
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 mt-3 main-card' >
            <div className="card border-0" >
                <img src={image} className="card-img-top" alt="..." height={310} width={200} style={{ cursor: "pointer" }} onClick={() => history.push(`/product/${props.item.id}`)}/>
                <div className="card-body">
                    <Text className="fs-12 text-center mb-1">{title.slice(0,20)}</Text>
                    <div className='text-center'>
                        <span className='text-capitalize me-2'>{category}</span>
                        <span className="fs-14 fw-bolder text-center">€{price} </span>
                    </div>
                </div>
                <button className="btn btn-primary shadow-none ms-4 me-4 buy-card rounded-0" onClick={() => props.setProductShow({value:props.item,show: true})}>Quick buy</button>
            </div>
        </div>
    );
};
