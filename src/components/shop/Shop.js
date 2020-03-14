import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../cart/Cart';
const Shop = () => {
    const fist10 = fakeData.slice(0,10);
   const [products, setProducts] = useState(fist10);
const [cart, setCart] = useState([]);

   const  handleAddProduct = (product) =>{
       console.log("Product added", product); 
       const newCart = [...cart, product];
       setCart(newCart);
   }
     
    return (
        <div className="shop-container">
           <div className="product-container">

            {
                products.map(productAll => <Product 
                    handleAddProduct = {handleAddProduct}
                    product={productAll}
                    ></Product>)
            }
        
           </div>
           <div className="cart-container">
                  <Cart cart={cart}></Cart>
               </div>
        </div>
    );
};

export default Shop;