import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    const { handleAddtoCart, products } = props;


    return (
        <div>
            <h2 className='mb-3'>Here will be our products</h2>

            <div className='container'>
                <div className="row row-cols-lg-3 row-cols-sm-1 row-cols-md-2 g-4 mb-3">
                    {
                        products.map(product => <Product product={product} handleAddtoCart={handleAddtoCart} key={product.id}></Product>)
                    }


                </div>

            </div>
        </div>
    );
};

export default Products;