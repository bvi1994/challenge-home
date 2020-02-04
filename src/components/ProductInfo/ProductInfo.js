import React, {Component} from 'react';
import Price from './PriceInfo/Price';
import PriceRange from './PriceInfo/PriceRange';
// import ProductCarousal from './ProductCarousal';
import {Link} from 'react-router-dom'

import './styles.css'

class ProductInfo extends Component {

  determinePriceComponent(){
    const {product} = this.props;
    if(product.priceRange){
      return (
        <PriceRange
          normalLowPrice={product.priceRange.regular.low}
          normalHighPrice={product.priceRange.regular.high}
          saleLowPrice={product.priceRange.selling.low}
          saleHighPrice={product.priceRange.selling.high}
          item={product.name}
        />
      )
    }
    return(
      <Price
        normalPrice={product.price.regular}
        salePrice={product.price.selling}
        item={product.name}
      />
    )
  }

  render(){
    const {product} = this.props;
    const priceComponent = this.determinePriceComponent();
    return(
      <div id={product.id} className={`productBox`}>
        <Link to={{
          pathname: `/${product.id}`,
          state: {
            productInfo: product,
          }
          }
        }
          style={{textDecoration: 'inherit', color: 'inherit'}}
        >
          <img
            className={`productImage`}
            src={product.hero.href}
            alt={`${product.id} ${product.hero.rel}`}
            onClick={this.toggleCaruosel}
          />
          <br />
          <span>{product.name}</span>
          {priceComponent ? priceComponent : <span>Unable to display price right now</span>}
        </Link>
      </div>
    )
  }

}

export default ProductInfo;
