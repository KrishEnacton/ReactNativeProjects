import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_FROM_FIREBASE } from '../constvalue/ConstReducerVal';
export default UserReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_FROM_FIREBASE:
            // console.log("Firebase Data Action:", action.payload);
            return [...state, action.payload]
            break;
        default:
            return state
            break;
    }
}