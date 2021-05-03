import api from '../utils/api';
import { setAlert } from './alert';

import {
 GET_NAMES_SUCCESS,
GET_NAMES_FAIL,
 GET_WEATHER_SUCCESS,
GET_WEATHER_FAIL
} from './types';

// Get names
export const getCityNames = () => async dispatch => {
  try {
    const res = await api.get(`/weather/city-names`);

    dispatch({
      type: GET_NAMES_SUCCESS,
      payload: res.data.data
    });
  } catch (err) {
    if(err.response){
    
      dispatch({
     type: GET_NAMES_FAIL,
     payload: err.response.data.msg
   });}else{
     dispatch({
       type: GET_NAMES_FAIL,
       payload:"Couldn't connect to server"
     });}
     dispatch(setAlert('noms des ville introuvable', 'danger'));

  }
};

// Get weather
export const getWeather = (name) => async dispatch => {
  try {
    const res = await api.get(`/weather/city?name=${name}`);

    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: res.data.data
    });
  } catch (err) {
    if(err.response){
    
      dispatch({
     type: GET_WEATHER_FAIL,
     payload: err.response.data.msg
   });

  }else{
     dispatch({
       type: GET_WEATHER_FAIL,
       payload:"Couldn't connect to server"
     });}
     dispatch(setAlert('Pas d\'information pour cette ville', 'danger'));

  }
};