
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import { addToDb, getShoppingCart } from './utilities/fakedb';
import { addtolocalstorage, getStoredCart } from './utilities/addtolocalstorage';



function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(data => setProducts(data.data));
  }, [])

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    // const savedCart = [];

    // storedCart.forEach(product => {
    //   for (const id in product) {
    //     const addedProduct = products.find(thing => thing.id === id);
    //     if (addedProduct) {
    //       const quantity = product[id];
    //       addedProduct.quantity = quantity;
    //       savedCart.push(addedProduct);
    //       console.log(savedCart);
    //     }

    //   }
    // });

    // for (const id in storedCart.product) {
    //   const addedProduct = products.find(product => product.id === id);
    //   if (addedProduct) {
    //     const quantity = storedCart.product[id];
    //     addedProduct.quantity = quantity;
    //     savedCart.push(addedProduct);
    //   }
    // }
    setCart(storedCart);
  }, [products])

  const handleAddtoCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    // addToDb(selectedProduct.id, selectedProduct.title);
    addtolocalstorage(selectedProduct, selectedProduct.id, selectedProduct.quantity);
  }
  return (
    <div className="App">
      <Header></Header>
      <Products handleAddtoCart={handleAddtoCart} products={products}></Products>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;
