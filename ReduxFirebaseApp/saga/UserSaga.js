import { take, call, all, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { GET_USER_DATA, GET_USER_DATA_SUCCESS } from '../constvalue/ConstReducerVal'

function* getApiData() {
    try {
        const res = yield call(myfun);
        yield put({ type: GET_USER_DATA_SUCCESS, payload: res });
    } catch (error) {
        console.log("Error in GET API DATA : ", error);
    }
}

const myfun = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2")
        .then((resp) => resp.json())
        .then((json) => {            
            return json.data;
        })
        .catch((err) => {
            console.log("ErrorAPI : ", err);
        })
    return data;
}

export function* getUserAction() {
    try {
        yield takeEvery(GET_USER_DATA, getApiData);
    } catch (error) {
        console.log("Error In GetUserAction : ", error);
    }
}
