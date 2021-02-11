export default apiReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRODUCT":
            console.log("Action Called");
            return [...action.payload];
            console.log("Data", state);

        case "FETCH_DATA_SUCCESS":
            console.log("SAGA Action Called");
            return [...action.payload];
        //console.log("Data", state);


        default:
            return state;

            console.log("Data", state);
    }
}
