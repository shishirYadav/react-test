import { combineReducers, createStore } from 'redux';
import reducer from '../Reducers/MovieList-reducer';

const allReducer = combineReducers ({
    movies: reducer
})

export const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )