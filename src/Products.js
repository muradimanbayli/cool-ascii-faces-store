import React, { Component } from 'react';
import Product from './Product';
import Ad from './Ad'

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : this.props.items,
      isLoading : false ,
      hasNoMoreData : false
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.items !== this.props.items){
        this.setState({ items: this.props.items });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  isButtom(){
    const element = document.documentElement ;
    return window.innerHeight + element.scrollTop === element.offsetHeight;
  }

  onScroll = () => {
    if (this.isButtom()){
        this.setState({isLoading:true});
        setTimeout(() => {
           if(this.props.nextContent().length === 0){
             this.setState({ hasNoMoreData : true});
           }else{
             const items = [...this.state.items,...this.props.nextContent()];
             this.setState({ items : items , isLoading : false});
           }
        },1000)
    }
  }

  getAdPanel = (index) => {
    if(index % 20 === 0 && index !== 0){
      return <Ad/> ;
    }
  }

  getProductsItems = () => {
    const items = this.state.items.map((productItem, index) => {
      return (
          <>
          {this.getAdPanel(index)}
          <Product face={productItem.face}
               size={productItem.size}
               id={productItem.id}
               date={productItem.date}
               price={productItem.price}  />
          </>
         );
    });

    return items;
  }

  getLoadingScreen = () => {
    if(this.state.isLoading){
      return <div style={{fontSize: 24, textAlign: 'center'}}>loading ... </div>
    }
  }

  getNoDataScreen = () => {
    if(this.state.hasNoMoreData){
      return <div>~ end of catalogue ~</div>
    }
  }

  render() {
    return (
      <div>
        { this.getProductsItems() }
        { this.getLoadingScreen() }
        { this.getNoDataScreen() }
      </div>
    );
  }
}

export default Products;
