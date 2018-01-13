import { combineReducers, createStore } from 'redux';
import  WeatherReducer  from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

const store = createStore(
  rootReducer, 
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;
