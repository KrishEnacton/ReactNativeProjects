import { GET_USER_DATA, GET_USER_DATA_SUCCESS } from '../constvalue/ConstReducerVal';

export const getUserData = () => {
    console.log("Get User Action Called");
    return {
        type: GET_USER_DATA,
    };
}

export const getUserDataSuccess = () => {
    return {
        type: GET_USER_DATA_SUCCESS,
    };
}