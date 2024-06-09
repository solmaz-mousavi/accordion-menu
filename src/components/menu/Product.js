import React from 'react';
import HeartIcon from '../icons/HeartIcon';
import '../../styles/menu/product.scss'

function Product({image, title, price, children}) {
	return (
		<div className='product-container'>
			<img className='product-image' src={image} alt='pic'/>
			<h3 className='product-title'>{title}</h3>
			<span className='product-price'>{price}$</span>
			<p className='product-description'>{children}</p>
			<HeartIcon/>
		</div>
	 );
}

export default Product;