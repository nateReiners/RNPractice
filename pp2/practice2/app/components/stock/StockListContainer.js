import { connect } from 'react-redux';
import StockList from './StockList';

const mapStateToProps = state => ({
  stocks: Object.values(state.stocks)
});

const mapDispatchToProps = dispatch => ({
  fetchUsersStocks: () => dispatch(requestUsersStocks())
});

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
