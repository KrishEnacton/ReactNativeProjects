import { NAVIGATE_FIREBASE, NAVIGATE_HOME, NAVIGATE_REDUX } from '../constvalue/ConstReducerVal';
export default UserReducer = (state = NAVIGATE_HOME, action) => {
    switch (action.type) {
        case NAVIGATE_FIREBASE:
            return NAVIGATE_FIREBASE
            break;
        case NAVIGATE_REDUX:
            return NAVIGATE_REDUX
            break;
        default:
            return [...state]
            break;
    }
}