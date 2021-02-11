const initState = {
    count: 0
};

export default counterReducer = (state = initState, action) => {
    
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }

        case "DECREMENT":
            return { count: state.count - 1 }

        default:
            return state;
    }
}
