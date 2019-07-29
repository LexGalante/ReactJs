import dispatch from 'react-redux';
import { ACTION_LOG } from '../constants/Constants';

export const Log = (text) => dispatch({
    type : ACTION_LOG,
    payload : text
});