import { useEffect } from "react";
import { useState } from "react";
import './Shope.css'
import Product from "../Products/Product";
 
import Cart from "../Cart/Cart";
import '../Products/Product.css'
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/fakedb";
 import fakeData from '../../fakeDate' ;
import { key,  } from "localforage";
import { Link } from "react-router-dom";
 
 
const Shop = () => {
 
    const first20 = fakeData.slice(0,15)
    const [products,setProduct] =useState(first20);
    const [bookCart,setBookCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(exitingKey => {
            const product = fakeData.find(pd => pd.key === exitingKey);
            product.quantity = savedCart[exitingKey];
            return product;
          
        })
        
         setBookCart(previousCart)
    },[])
     
      
    const handleBookCart = book => {
        const toBeAddedKey = book.key
        const sameProduct = bookCart.find(pd => pd.key === book.key );
        let count = 1;  
        let newBookCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity =  count;
            const others = bookCart.filter(pd => pd.key !==toBeAddedKey)
            newBookCart = [...others, sameProduct];
        }
        else{
            book.quantity = 1;
            newBookCart = [...bookCart, book]
        }
        setBookCart(newBookCart);
        addToDatabaseCart(book.key, count)
        
    }

    
    

    return (
        <div className='shop-container'>

            <div className="product-container">
             
             {
                products.map(product =><Product
                       
                key={product.key} 
                product={product}
                handleBookCart={handleBookCart}
                shhowAddToCart={true} 
                >
                    
                </Product>)
             }
            
            </div>

            <div className="cart-container posit">
            <Cart bookCart={bookCart}>
            <Link to={"/review"}>
            <button className="main-button1">Review Order</button>
            </Link>
            
            </Cart>

            </div>
             
            
        </div>
    );
};

export default Shop;