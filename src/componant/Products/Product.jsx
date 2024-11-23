import { Link } from 'react-router-dom';
import './Product.css'

 

const Product = (props) => {
    const{category,img,name,seller,wholePrice,priceFraction,starCount,stock,url,price,key,features} =props.product;
     
    return (
        <div className='all-products'>
            <div className='proImg'>
            <img src={img} alt="" />
            </div>
             <div className="proDesription">
             <h4 className='product-name'><Link to={"/product/"+ key} >{name}</Link></h4>
             <h3 ><small>by: {seller}</small></h3>
             <h3 className='text-tomato'>${price}</h3>
             <p><small>Only {stock} left in stock - Order soon</small></p>
             {props.shhowAddToCart === true &&
                <div>
                <button onClick={()=>props.handleBookCart(props.product)}  className='main-button1'><i className="fa-duotone fa-solid fa-cart-shopping"></i> Add to Cart</button>
                <a target='_blank'   href={url}><button className='main-button1'><i className="fa-duotone fa-solid fa-bag-shopping"></i> Buy Now</button></a>
             </div>
             }
             </div>
            
            
        </div>
    );
};

export default Product;