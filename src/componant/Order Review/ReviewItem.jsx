 
 
const ReviewItem = (props) => {
    const{category,img,name,seller,wholePrice,priceFraction,starCount,stock,url,price,key,features,quantity} =props.product

      
    return (
        <div className='revieItm' >
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4>{name}</h4>
            <p>Price:{wholePrice}</p>
            <p>Quality: {quantity}</p>
            <button
            onClick={() => props.removeProduct(key)}
             className="main-button1"
             >Remove</button>
            </div>
        </div>
    );
}; 

export default ReviewItem;