import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(data => setProducts(data.data));
    }, [])
    return (
        <div>
            <h2 className='mb-3'>Here will be our products</h2>

            <div className='container'>
                <div className="row row-cols-lg-3 row-cols-sm-1 row-cols-md-2 g-4 mb-3">
                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }


                </div>

            </div>
        </div>
    );
};

export default Products;