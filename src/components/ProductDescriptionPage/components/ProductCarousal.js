import React, {Component} from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class ProductCarousal extends Component {

  render(){
    const {onClose, productImages} = this.props;
    return(
      <ModalGateway>
        <Modal
          onClose={onClose}
        >
          <Carousel views={productImages} />
        </Modal>
      </ModalGateway>
    )
  }
}

export default ProductCarousal;
