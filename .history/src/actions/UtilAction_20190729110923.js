import { ACTION_LOG } from '../constants/Constants';

export const Log = (text) => (dispatch) => dispatch({
    type : ACTION_LOG,
    payload : text
});