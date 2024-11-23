import React from 'react';
import { useParams } from 'react-router-dom';
import fakData from '../../fakeDate'
import Product from '../Products/Product';

const ProductDetails = () => {
    const {productkey} = useParams();
    const product = fakData.find(pd =>pd.key ===productkey)
    const{category,img,name,seller,wholePrice,priceFraction,starCount,stock,url,price,key,features} =product;
     
    return (
        <div>
             <h1>this is product name: {name}</h1>
            <h1>this is Product Details Coming sooooooooon:{productkey}</h1>
            <Product shhowAddToCart={false} product={product}></Product>

           
            
        </div>
    );
};

export default ProductDetails;