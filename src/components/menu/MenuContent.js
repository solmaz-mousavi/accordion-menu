import React from 'react';
import Product from './Product';
import '../../styles/menu/menuContent.scss'

function MenuContent() {
	return ( 
		<div className='container menu-content'>
			<Product image="./images/pic1.png" title="Product_1" price={230}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil!</Product>
			<Product image="./images/pic2.png" title="Product_2" price={410}>Lorem ipsum dolor sit nihil!</Product>
			<Product image="./images/pic3.png" title="Product_3" price={32}>Lorem ipsum dolor sit amet lit. Fugit, nihil!</Product>
			<Product image="./images/pic4.png" title="Product_4" price={75}>Lorem ipsum dolor sit amet consectetur adipisicing hil!</Product>
		</div>
	 );
}

export default MenuContent;