import * as companyAPI from '../util/api.js';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const fetchCompanies = () => dispatch => {
  return companyAPI.fetchCompanies().then(
    (resp) => {
      const companies = JSON.parse(resp._bodyText);
      dispatch(receiveCompanies(companies));
    }
  );
};

export const fetchCompany = (id) => dispatch => {
  console.log("hit fetchcompany action");
  return companyAPI.fetchCompany(id).then(
    (resp) => resp.json()).then( json => dispatch(receiveCompany(json)));
};
