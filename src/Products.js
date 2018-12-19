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

  render() {
    let loadingScreen;
    let noDataScreen;

    if(this.state.isLoading){
      loadingScreen = <div style={{fontSize: 24, textAlign: 'center'}}>loading ... </div>
    }

    if(this.state.hasNoMoreData){
      noDataScreen = <div>~ end of catalogue ~</div>
    }

    const productItems = this.state.items.map((productItem, index) => {
      let advertisement;
      if(index % 20 === 0 && index !== 0){
        advertisement = <Ad/>
      }
      return (
          <>
          {advertisement}
          <Product face={productItem.face}
               size={productItem.size}
               id={productItem.id}
               date={productItem.date}
               price={productItem.price}  />
          </>
         );
    });

    return (
      <div>
        {productItems}
        {loadingScreen}
        {noDataScreen}
      </div>
    );
  }
}

export default Products;
