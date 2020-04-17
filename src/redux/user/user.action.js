import {UserActionTypes} from './uset.types';

export const setCurrentUser = user => ({
    type:  UserActionTypes.SET_CURRENT_USER,
    payload: user
});
