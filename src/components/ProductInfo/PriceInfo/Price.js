import React, {Component} from 'react';

class Price extends Component {
  render(){
    const {normalPrice, salePrice, item} = this.props;
    return(
      <div id={`${item}-pricing`} className={`price-info`}>
        <span
          className={'normalPrice' + salePrice ? 'originalPrice' : ''}
          id={`regular-price-${item}`}
          alt={`regular price for ${item} is ${normalPrice}`}
        >
          {`$${Number(normalPrice).toFixed(2)}`}
        </span>
        {salePrice &&
          <span
            className={`salePrice`}
            id={`sale-price-${item}`}
            alt={`sale price for ${item} is ${salePrice}`}
          >
            {`  $${Number(salePrice).toFixed(2)}`}
          </span>
        }
      </div>
    )
  }
}

export default Price;
