import { ACTION_LOG } from '../constants/Constants';

export const log = function(text) {
    return {
        type : ACTION_LOG,
        payload : text
    }
}