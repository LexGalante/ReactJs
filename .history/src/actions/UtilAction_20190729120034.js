import { ACTION_LOG } from '../constants/Constants';

export const log = (dispatch, param) => dispatch({
    type: ACTION_LOG,
    payload: param
});    
