export const ReducerAllAlert = (state = [], action) => {
    switch(action.type){
        case "ALERT":
            return action.payload;
        default:
            return state;
    }
}

export const ReducerAllCustomer = (state = [], action) => {
    switch(action.type){
        case "CUSTOMER":
            return action.payload;
        default:
            return state;
    }
}