import { ACTION_LOG } from '../constants/Constants';

export const log = (dispatch, text) => dispatch({
    type: ACTION_LOG,
    payload: text
});    
