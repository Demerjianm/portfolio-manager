import React, { Component } from 'react';
import { getStocks } from '../actions/stocks';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Stocks extends Component {

  state = { stocks: [] }

  // componentDidMount() {
  //   this.props.dispatch(getStocks())
  //   this.setState({ stocks: this.props.stocks})
  // }

  getStock = () => {
    this.props.dispatch(getStocks())    
  }

  render() {
    let stocks = this.props.stocks
    let astock = 5 * stocks
    console.log(stocks)
    console.log(astock)
    return(
      <div>

        <p>hello there </p>
        <button onClick={ () => this.getStock()}>Get Prices</button>
      </div>
    );
  }
}

// Example Redux Store
// {
//   notes: [{}, {}, {}],
//   user: { name: 'jake', age: 27, gender: 'Male'},
//   cars: [{}, {}, {}, {}, {}, {}]
// }

const mapStateToProps = (state) => {
  return { stocks: state.stocks }
}

export default connect(mapStateToProps)(Stocks);
