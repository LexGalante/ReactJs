import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

export default const ConfigureReduxStore = (initialState={}) => 
    createStore(
        RootReducer,
        initialState,
        applyMiddleware(thunk)
    );
