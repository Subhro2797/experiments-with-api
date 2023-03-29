import React from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props);
    const { image, category, description, price } = props.product;

    return (

        <div className="col">
            <div className="card h-100 box">
                <img src={image} className="card-img-top" style={{ width: '100%', height: '400px' }} alt="..." />

                <div className="card-body">
                    <h4 className='text-start'>Price:{price}</h4>
                    <h5 className="card-title text-start">{category}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <button className='btn btn-warning text-white'>Add to Cart</button>
            </div>
        </div>

    );
};

export default Product;