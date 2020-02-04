import React, {Component} from 'react';
import Price from './../ProductInfo/PriceInfo/Price';
import PriceRange from './../ProductInfo/PriceInfo/PriceRange';
import ImageComponent from './components/imagecomponent';
import SelectOption from './components/SelectOption';
import QuantityButton from './components/QuantityComponent'
import AddtoCart from './components/AddtoCart';
import BuyNow from './components/BuyNow';

import './styles.css'

class PDPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
      quantity: 1,
    }
  }

  addToCart = () => {
    console.log('added to cart!')
  }

  handleButton = async (event) => {
    await this.setState({
      selectedOption: event.target.value,
    })
    console.log('handle button', this.state.selectedOption)
  }

  handleAdd = async () => {
    await this.setState({
      quantity: this.state.quantity + 1,
    })
  }

  handleSubtract = async () => {
    if(this.state.quantity === 1){
      return;
    }
    await this.setState({
      quantity: this.state.quantity - 1,
    })
  }

  determinePriceComponent(){
    const {priceRange, price, name} = this.props.location.state.productInfo;
    if(priceRange){
      return (
        <PriceRange
          normalLowPrice={priceRange.regular.low}
          normalHighPrice={priceRange.regular.high}
          saleLowPrice={priceRange.selling.low}
          saleHighPrice={priceRange.selling.high}
          item={name}
        />
      )
    }
    return(
      <Price
        normalPrice={price.regular}
        salePrice={price.selling}
        item={name}
      />
    )
  }

  render(){
    const {id, name, links, priceRange, hero, images} = this.props.location.state.productInfo;
    const pricetag = this.determinePriceComponent();
    console.log('the props: ', this.props.location.state.productInfo);
    return (
      <div>
        <div className={`column imageGallery`}>
          <ImageComponent
            heroImage={hero}
            otherImages={images}
            idItem={id}
            itemName={name}
          />
        </div>
        <div className={`column productInfo`}>
          <span className={`productName`}>{name}</span> <br />
            <div className={`priceInfo`}>{pricetag ? pricetag : <span>Pricing not available</span>}</div>
            {priceRange &&
              <SelectOption
                options={[`$${Number(priceRange.selling.low).toFixed(2) || Number(priceRange.regular.low).toFixed(2)}`, `$${Number(priceRange.selling.high).toFixed(2) || Number(priceRange.regular.high).toFixed(2)}`]}
                eventHandler={this.handleButton}
              />
            }
          </div>
        <div className={`column purchase`}>
          <QuantityButton
            add={this.handleAdd}
            subtract={this.handleSubtract}
            addsymbol={'+'}
            subtractsymbol={'-'}
            quantity={this.state.quantity}
          />
          <AddtoCart
            handleSubmit={this.addToCart}
          />
          <br />
          <BuyNow
            redirectTo={links.www}
          />
        </div>
      </div>
    )
  }
}

export default PDPage;
