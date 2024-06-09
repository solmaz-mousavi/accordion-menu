import React, { Component } from 'react';
import MenuContent from './MenuContent';
import '../../styles/menu/header.scss'

class Header extends Component {
	constructor(props){
		super(props);
		this.state = { menuIsVisible : false}
		this.menuHandler = this.menuHandler.bind(this);
	}

	menuHandler(){
		this.setState( {menuIsVisible: !this.state.menuIsVisible}) ;
	}

	render() { 
		return (
			<div className={this.state.menuIsVisible ? 'visible' : ''}>
				<div className='header container' onClick={this.menuHandler}>
					<div className='menu-title'>Digital products</div>
					<div className='menu-accordion'>&#10094;</div>
				</div>
				<MenuContent/>
			</div>
		);
	}
}
 
export default Header;

