import React from 'react';
import Image from '../../assets/img/bam.webp'
import { Text } from '../text';
import "./style.scss"

export const Product = (props) => {
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 mt-3 main-card'>
            <div class="card border-0" >
                <img src={Image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <Text className="fs-12 text-center mb-1">Tricot Bomber Tracksuit With Panels</Text>
                    <div className='text-center'>
                        <span className="fs-14 fw-bolder text-center text-decoration-line-through">€40.00 </span><span className="text-danger text-decoration-none">€25.00</span>
                    </div>
                </div>
                <button className="btn btn-primary shadow-none ms-4 me-4 buy-card rounded-0" onClick={() => props.setProductShow(true)}>Quick buy</button>
            </div>
        </div>
    );
};
