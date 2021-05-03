import {
  GET_NAMES_SUCCESS,
  GET_NAMES_FAIL,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from '../actions/types';

const initialState = {
  names: [],
  weather:null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NAMES_SUCCESS:
      return {
        ...state,
        names: payload,
        loading: false
      };
    case GET_NAMES_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload,
        loading: false
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        error: payload,
        weather: null,
        loading: false
      };

    default:
      return state;
  }
}
