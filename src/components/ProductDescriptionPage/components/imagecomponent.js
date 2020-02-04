import React, {Component} from 'react';
import ProductCarousal from './ProductCarousal'

class ImageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCaruosel: false,
      mainImage: this.props.heroImage.href,
      productImages: [],
    }
  }

  async componentDidMount(){
    await this.imagesToShow(this.props.heroImage, this.props.otherImages);
  }

  async imagesToShow(mainImage, otherImages){
    let tempArray = [];
    tempArray.push({src: mainImage.href});
    for(let i = 0; i < otherImages.length; i++){
      tempArray.push({src: otherImages[i].href});
    }
    await this.setState({
      productImages: tempArray,
    })
    console.log('product', this.state.productImages)
  }

  toggleCaruosel = () => {
    this.setState({
      showCaruosel: !this.state.showCaruosel,
    })
  }

  toggleMainImage = (url) => {
    this.setState({
      mainImage: url
    })
  }


  render(){
    const {heroImage, otherImages, id, itemName} = this.props;
    return(
      <div className={`pdp-image-gallery`}>
      { this.state.showCaruosel &&
        <ProductCarousal
          mainImage={this.state.mainImage || heroImage.href}
          productImages={this.state.productImages}
          onClose={this.toggleCaruosel}
        />
      }
      <img
         src={this.state.mainImage || heroImage.href}
         onClick={this.toggleCaruosel}
         alt={`${itemName}`}
         id={`${id}`}
         class={`mainImage`}
       />
       <div className={`thumbnail-images`}>
          {
            this.state.productImages.map((image, i) => {
              return (
                <img
                  src={image.src}
                  style={{width:`50px`,height:`50px`}}
                  onClick={() => this.toggleMainImage(image.src)}
                  class={`thumbnail`}
                />
              )
            })
          }
       </div>
      </div>
    )
  }
}

export default ImageComponent;
