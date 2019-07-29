import { ACTION_LOG } from '../constants/Constants';

export const Log = (text) => (dispatch) => {
    debugger;
    dispatch({
        type : ACTION_LOG,
        payload : text
    });
}