import { ACTION_LOG } from '../constants/Constants';

export const Log = (text) => dispatchEvent({
    type : ACTION_LOG
});