const stocks = ( state = [], action ) => {
  switch (action.type) {
    case 'STOCKS':
      return [ action.stocks ]
    default:
      return state;
  }
}

export default stocks;
