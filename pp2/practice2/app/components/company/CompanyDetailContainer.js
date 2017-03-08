import { connect } from 'react-redux';
import CompanyDetail from './CompanyDetail';
import { fetchCompany, fetchCompanies } from '../../actions/companyActions';

const mapStateToProps = ({ company }) => ({
  movies: company.movies || [{title: "MOCK NO movies"}],
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompany: (url) => dispatch(fetchCompany(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetail);
