import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_FROM_FIREBASE } from '../constvalue/ConstReducerVal';

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

export const getUserDataFromFirebase = (data) => {
    return {
        type: GET_USER_FROM_FIREBASE,
        payload: data
    };
}