import React, {Component} from 'react';

class QuantityButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      // quantity: 1,
    }
  }
  render(){
    const {add, subtract, addsymbol, subtractsymbol, quantity} = this.props;
    return (
      <div className='quantField'>
        <button
          onClick={subtract}
          className={`baseButton updateQuant`}
        >
          {subtractsymbol}
        </button>
          <input type='number' value={quantity} className={`quantInput`} />
        <button
          onClick={add}
          className={`baseButton updateQuant`}
        >
          {addsymbol}
        </button>
      </div>
    )
  }
}

export default QuantityButton;
