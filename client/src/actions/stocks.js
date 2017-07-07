// GET ALL NOTES
export const getStocks = () => {
  return(dispatch) => {
    fetch('/api/stocks/aapl')
      .then( res => res.json() )
      .then( stocks => dispatch({ type: 'STOCKS', stocks }))
  }
  
}
