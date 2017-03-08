import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY
} from '../actions/companyActions';

import { merge } from 'lodash';

const initialState = {
    movies: [],
};

const companyReducer = (state = initialState, action) => {
  console.log(state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      let newState = merge({}, state, { movies: action.company.movies });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default companyReducer;
