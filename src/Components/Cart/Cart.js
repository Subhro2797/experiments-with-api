import React, { useState } from 'react';
import ChosenProduct from '../ChosenProduct/ChosenProduct';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const [amount, setAmount] = useState(1);
    const [tprice, setTprice] = useState(0);
    const [newtax, setNewtax] = useState(0);
    const [newGtotal, setNewGotal] = useState(0);
    const handleIncreaseButton = () => {
        setAmount(amount + 1);

    }
    const handleDecreaseButton = () => {
        setAmount(amount - 1);
    }
    // console.log(props);
    const { cart } = props;
    // console.log(cart);
    var total = 0;
    var quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;

    }
    let tax = total * 0.1;
    let grandTotal = total + tax;

    return (
        <div>
            <div className='cart-container container'>
                <h1 className='text-start'>Shopping Cart</h1>
                <div className='row '>
                    <div className='shopping-cart col-lg-9 col-md-6 col-sm-7 border border-white border-5 rounded-3 ' >

                        <hr />
                        {
                            cart.map(product => <ChosenProduct
                                cart={product}
                                amount={amount}
                                handleDecreaseButton={handleDecreaseButton}
                                handleIncreaseButton={handleIncreaseButton}
                                key={product.id}></ChosenProduct>)
                        }
                    </div>
                    <div className=' order-summary col-lg-3 col-md-6 col-sm-5 border border-white border-5 rounded-3 '>
                        <h2> <u>Order Summary</u></h2>
                        <p className='fs-5'><strong>Selected Items: </strong>{props.cart.length}</p>
                        <p className='fs-5'><strong>Total Price: {total} </strong></p>
                        <p className='fs-5'><strong>Tax </strong>: ${tax.toFixed(2)}</p>
                        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                        <div className='d-flex flex-column'>
                            <button type='button' className='btn btn-danger p-2 mb-3'>Clear Cart</button>
                            <button type='button' className='btn btn-warning p-2'>Proceed to Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;