import { ACTION_LOG } from '../constants/Constants';

export const Log = (text) => {
    type : ACTION_LOG,
    payload : text
}