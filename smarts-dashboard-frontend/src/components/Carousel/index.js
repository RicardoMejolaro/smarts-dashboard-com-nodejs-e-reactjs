import React, { Component } from 'react';

//Material UI icones
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/*Tags Styleds*/
import {
  CarouselContainer,
  CarouselImg,
  LeftController,
  RightController,
} from './styles';

let myVar

export default class Carousel extends Component {
  state = {
    count: 0,
    images: this.props.images
  }

  nextBanner = () => {
    if (this.state.count < this.state.images.length - 1) {
      this.setState({ count: this.state.count + 1 })
    } else {
      this.setState({ count: 0 })
    }
  }

  beforeBanner = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    } else {
      this.setState({ count: this.state.images.length - 1 })
    }
  }

  setImage = () => {
    this.state.count === this.state.images.length - 1 ? this.setState({ count: 0 }) : this.nextBanner();
  }

  stopSetImage() {
    clearInterval(myVar);
  }

  myVar = setInterval(this.setImage, 5000);
  
  render() {
    return (
      <CarouselContainer>
        <LeftController onClick={this.beforeBanner}>
          <ArrowBackIosIcon style={{ color: '#FFFFFF' }} />
        </LeftController>
        <CarouselImg src={this.state.images[this.state.count].url} />
        <RightController onClick={this.nextBanner}>
          <ArrowForwardIosIcon style={{ color: '#FFFFFF' }} />
        </RightController>
      </CarouselContainer>
    )
  }
}