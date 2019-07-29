import { ACTION_LOG } from '../constants/Constants';

export const log = (text) => (dispatch) => {
    console.log(text);
}