import React, {Component} from 'react';
import './styles.css';

class PriceRange extends Component {
  render(){
    const {
      normalLowPrice,
      normalHighPrice,
      saleLowPrice,
      saleHighPrice,
      item,
    }
    = this.props;
    return(
      <div id={`${item}-pricing`} className={`price-info`}>
        <span
          className={'normalPrice' + saleLowPrice ? 'originalPrice' : ''}
          id={`regular-price-${item}`}
          alt={`regular price range for ${item} is $${normalLowPrice}-$${normalHighPrice}`}
        >
          {`$${Number(normalLowPrice).toFixed(2)}-$${Number(normalHighPrice).toFixed(2)}`}
        </span>
        {saleLowPrice &&
          <span
            className={`salePrice`}
            id={`sale-price-${item}`}
            alt={`sale price range for ${item} is $${saleLowPrice}-$${saleHighPrice}`}
          >
            {`  $${Number(saleLowPrice).toFixed(2)}-$${Number(saleHighPrice).toFixed(2)}`}
          </span>
        }
      </div>
    )
  }
}

export default PriceRange;
