import { ACTION_LOG } from '../shareds/Constants';

export const log = (dispatch, param) => dispatch({
    type: ACTION_LOG,
    payload: param
});    
