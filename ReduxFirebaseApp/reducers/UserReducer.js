import { GET_USER_DATA, GET_USER_DATA_SUCCESS } from '../constvalue/ConstReducerVal';
export default UserReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_DATA_SUCCESS:
            return [...action.payload]
            break;
        default:
            return [...state]
            break;
    }
}