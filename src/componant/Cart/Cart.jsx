import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
const bookCart = props.bookCart;
//  console.log(bookCart);
    // const total = bookCart.reduce( (total, prd) => total + prd.price ,0)

    let total = 0;
    for (let i = 0; i < bookCart.length; i++) {
        const product = bookCart[i];
        total = total + product.price * product.quantity;
        
        }


   let shipping = 0;
   if (total > 100) {
    shipping = 0 ;
   }
   else if(total > 15){
    shipping =4.55

   }

   else if(total > 0){
    shipping = 12.88;}

    const  tax = total/50 

    // const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    
    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
   
    const grandTotal = formateNumber(total + shipping + Number(tax)) 

    return (
        <div>
            <h3>Order Summary:</h3>
            <p>Items Ordered: {bookCart.length}</p>
             
            <h5>Product Price: {formateNumber(total)}   </h5>
                <small>Shipping Cost : {shipping}</small>
                
                <p><small>Tax + VAT: {formateNumber(tax)}</small></p>
            
            <h5>Total Price: {grandTotal}   </h5>
            <br />
            {
                props.children
            }
            
            
        </div>
    );
};

export default Cart;