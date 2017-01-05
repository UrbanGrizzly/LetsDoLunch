import React, {Component, PropTypes} from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

let prices = ['$','$$','$$$','$$$$'];

class PriceRange extends Component {

  changePriceButton(item) {
    if (this.props.priceStatus[item]===true){
      return 'info'
    }
  }

  render () {
    let priceOptions = prices.map((item, index) =>
      <Button bsStyle={this.changePriceButton(item)} key={index} onClick={() => this.props.changePrice(item)}>{item}</Button>
    );

    return (
      <div className='prefTitle'>Price Range
        <ButtonToolbar>
          <ButtonGroup bsSize='large' className='priceRange'>
            {priceOptions}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default PriceRange

