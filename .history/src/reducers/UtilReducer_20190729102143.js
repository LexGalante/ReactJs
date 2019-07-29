import { ACTION_LOG } from '../constants/Constants';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_LOG:
            console.log(action.payload);
            return {
                result: action.payload
            }
        default:
            return state
    }
}