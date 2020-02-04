import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

class AddToCartButton extends Component{
  render(){
    const {handleSubmit} = this.props;
    return(
      <Link to={'/'}>
        <button
          className={`baseButton addToCartButton`}
          onClick={handleSubmit}
        >
          Add to Cart
        </button>
      </Link>
    )
  }
}

export default AddToCartButton;
