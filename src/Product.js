import React, { Component } from 'react';
import { formatCurrency, formatDate } from './utils';
import './Product.css';

class Product extends Component {

  render() {
    const { face, size, id, date, price } = this.props ;

    return (
      <div className="product">
        <p style={{fontSize: size}}> {face} </p>
        <p>Size : {size} </p>
        <p>Id : {id} </p>
        <p>Price : {formatCurrency(price)} </p>
        <p>Date : {formatDate(date)} </p>
      </div>
    );
  }
}

export default Product;
