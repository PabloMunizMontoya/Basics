import React from 'react';

const Product = ({product, products, cart, setCart}) => {

    const { name, price, id} = product

    // add product to cart
    const selectProduct = (id) => {
        const product = products.filter(product => product.id === id)[0]
        setCart([
            ...cart,
            product
        ])
    }


    return ( 
            <div>
                <h2>{name}</h2>
                <p>${price}</p>
                <button
                    type='button'
                    onClick={() => selectProduct(id) }
                >Buy</button>
            </div>
                
            
            );
}
 
export default Product;