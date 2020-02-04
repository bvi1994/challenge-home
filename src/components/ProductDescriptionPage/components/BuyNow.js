import React, {Component} from 'react';
import './styles.css';

class BuyNowButton extends Component{
  render(){
    const {redirectTo} = this.props;
    console.log(redirectTo);
    return(
      <a href={redirectTo}>
        <button
          className={`baseButton buyNowButton`}
        >
            Buy Now
        </button>
      </a>
    )
  }
}

export default BuyNowButton;
