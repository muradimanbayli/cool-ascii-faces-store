import React, { Component } from 'react';
import SortBox from './SortBox';
import Products from './Products';
import {fetchProducts } from './api';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortItems : [],
      productItems : [],
      currentPage : 0,
      limit : 40,
      currentSort : "id" ,
      nextProductsToLoad : []
    }
  }

  componentWillMount(){
    const sortItems = [{ label: "Id", key : "id" },
                       { label: "Size", key : "size" },
                       { label: "Price", key : "price" }];
    this.setState({ sortItems : sortItems });

    fetchProducts(this.state.currentPage, this.state.currentSort)
    .then((response)=>{
      console.log(response);
      this.setState({ productItems : response });
    });

    this.loadNextProducts();
 }

 loadNextProducts = () => {
    const nextPage = this.state.currentPage + 1 ;
    fetchProducts(nextPage, this.state.limit ,this.state.currentSort)
    .then((response)=>{
      this.setState({ nextProductsToLoad : response});
    })
    this.setState({ currentPage : nextPage });
  }

  sort = (sortItem) => {
    fetchProducts(0, this.state.currentPage, sortItem)
    .then((response)=>{
        this.setState({ productItems : response});
    })
  }

  nextContent = () => {
    const temp = this.state.nextProductsToLoad;
    this.loadNextProducts();
    return temp
  }

  render() {
    let {sortItems,productItems} = this.state ;
    return (
      <div className="wrapper">
        <SortBox items={sortItems} itemChange={this.sort}/>
        <Products items={productItems} nextContent={this.nextContent}/>
      </div>
    );
  }
}

export default App;
