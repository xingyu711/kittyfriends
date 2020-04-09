import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KITTIES_PENDING,
  REQUEST_KITTIES_SUCCESS,
  REQUEST_KITTIES_FAILED
} from './constants';

import { apiCall } from './api/api'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const setRequestKitties = () => (dispatch) => {
    dispatch({ type: REQUEST_KITTIES_PENDING });
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(data => dispatch({ type: REQUEST_KITTIES_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_KITTIES_FAILED, payload: error }))
}