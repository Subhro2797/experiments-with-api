import React, { useState } from 'react';

const ChosenProduct = (props) => {
    const [newPrice, setnewPrice] = useState(props.cart.price);
    const { amount, handleIncreaseButton, handleDecreaseButton } = props;

    return (
        <div>

            <div className="card mb-3 product-container">
                <div className="row g-0">
                    <div className="col-md-4  border  border-end">
                        <img src={props.cart.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">{props.cart.title}</h5>
                                <h5>{props.cart.price}</h5>
                            </div>
                            <p className='fs-6 fw-medium text-start'>In stock</p>
                            <h6 className='text-start'><small>Eligible for free shipping</small></h6>
                            <p className='text-start'><span className='fs-6 fw-semibold '>Color: </span>Burlywood</p>
                            <div className="dropdown text-start">
                                <button className="btn btn-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Quantity
                                </button>
                                <ul className="dropdown-menu text-center" data-width='50px'>
                                    <li><a className="dropdown-item" href='ali'>1</a></li>
                                    <li><a className="dropdown-item" href="ali">2</a></li>
                                    <li><a className="dropdown-item" href="ali">3</a></li>
                                    <li><a className="dropdown-item" href="ali">4</a></li>
                                    <li><a className="dropdown-item" href="ali">5</a></li>
                                    <li><a className="dropdown-item" href="ali">6</a></li>
                                    <li><a className="dropdown-item" href="ali">7</a></li>
                                </ul>
                                <button onClick={handleDecreaseButton}>-</button>
                                <button>{amount}</button>
                                <button onClick={handleIncreaseButton}>+</button>
                                <span><a href="ali" className="link-primary ms-2">Delete</a></span>
                                <span><a href="ali" className="link-primary ms-2">Save for Later</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-end'>
                    <h5 className='me-3'>{props.cart.price}</h5>
                </div>
            </div>
        </div>
    );
};

export default ChosenProduct;