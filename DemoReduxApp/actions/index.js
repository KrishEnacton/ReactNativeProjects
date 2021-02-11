export const increment = () => {
    return {
        type: "INCREMENT"
    };
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    };
}

export const addUser = (data) => {
    return {
        type: "ADD_USER",
        payload: data
    };
}

export const removeUser = (index) => {
    return {
        type: "REMOVE_USER",
        payload: index
    };
}

export const fetchProduct = () => {
    return async (dispatch) => {
        const res = await fetch("https://reqres.in/api/users?page=2")
            .then((resp) => resp.json())
            .then((json) => {
                return json.data;
            })
            .catch((err) => {
                console.log("Error : ", err);
            });
        const data = await res;
        console.log("ApiData : ", JSON.stringify(data.data));
        dispatch(setProduct(data));
    }
}

export const setProduct = (data = null) => {
    if (data) {
        return {
            type: "SET_PRODUCT",
            payload: data
        }
    }
}

//Redux Saga

import { take, call, all, takeEvery, takeLatest, put } from 'redux-saga/effects'

function* getApiData() {
    try {
        const res = yield call(myfun);
        yield put({ type: "FETCH_DATA_SUCCESS", payload: res });
    } catch (error) {
        console.log("ErrorYIELD : ", error);
    }
}

const myfun = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2")
        .then((resp) => resp.json())
        .then((json) => {
            console.log("DATA_INSIDE:", json.data);
            return json.data;
        })
        .catch((err) => {
            console.log("ErrorAPI : ", err);
        })
    return data;
}

export function* SagaFuncation() {
    try {
        yield takeEvery("FETCH_DATA", getApiData);
    } catch (error) {
    }
}

export const fData = () => {
    return {
        type: "FETCH_DATA",
    }
}
