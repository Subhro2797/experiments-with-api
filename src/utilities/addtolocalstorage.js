

const addtolocalstorage = (collection) => {
    let arrayCollection = getStoredCart();
    arrayCollection.push(collection);
    localStorage.setItem('shoppingcart', JSON.stringify(arrayCollection));
}

const removetheDb = (collection) => {
    let arrayCollection = getStoredCart();
    if (collection in arrayCollection) {
        delete arrayCollection[collection];

    }
}

const getStoredCart = () => {
    let arrayCollection = [];

    const storedCart = localStorage.getItem('shoppingcart');
    if (storedCart) {
        arrayCollection = JSON.parse(storedCart);

    }
    return arrayCollection;
}

const deletetheStoredCart = () => {
    localStorage.removeItem('shopppingcart');
}

export {
    addtolocalstorage,
    removetheDb,
    getStoredCart,
    deletetheStoredCart
};