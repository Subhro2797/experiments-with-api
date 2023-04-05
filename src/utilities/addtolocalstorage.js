

const addtolocalstorage = (collection, id, quantity) => {
    let arrayCollection = getStoredCart();
    console.log(collection);
    let existing = arrayCollection.find(product => product.id === collection.id);

    if (existing) {
        existing.quantity += 1;
    }
    else {
        arrayCollection.push(collection);
    }
    //adding quantity

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