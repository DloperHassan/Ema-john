import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
 
import fakeData from '../../fakeDate';
import ReviewItem from './ReviewItem';
import '../../componant/Products/Product.css'
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif'
 
 

const OrderReview = () => {

    const [cart, setCart] = useState([])
    const [plecOrder, setPlaceOrder] = useState(false)
    const handlPlaceOrder = () => {
         setCart([]);
         setPlaceOrder(true)
         processOrder();
    }
    const removeProduct  = (productkeys) => {
        // console.log("this is removeProduct clicked",productkeys);
        const newCart = cart.filter(pd => pd.key !==productkeys)
        setCart(newCart);
        removeFromDatabaseCart(productkeys)
    }

    useEffect(() => {
        // cart
         const savedCart =  getDatabaseCart();
         const productkeys = Object.keys(savedCart);
         const  cartProduct = productkeys.map(key =>  {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
         });
          setCart(cartProduct)
    },[])


    let thankYou ;
    if (plecOrder) {
        thankYou = <img src={happyImg} alt="" />
    }

    return (
        <div className='shop-container'>
            
           <div className="product-container">
           {
                cart.map( pd => <ReviewItem
                     key={pd.key}
                      product={pd}
                      removeProduct={removeProduct}
                      ></ReviewItem>)
            }
            {
                thankYou
            }
           </div>
           <div className="cart-container">
          <Cart  bookCart={cart}>
            <button onClick={handlPlaceOrder} className='main-button1'>
                Place Order
            </button>
          </Cart>
           </div>
             
            
        </div>
    );
};

export default OrderReview;