import { ACTION_LOG } from '../constants/Constants';

export const log = (text) => (dispatch) => dispatch({
    type : ACTION_LOG,
    payload : text
});