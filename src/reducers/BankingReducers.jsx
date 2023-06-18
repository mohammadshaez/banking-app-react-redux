const initialState = 0;


const bankingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "DEPOSIT" : 
            return state + action.amount;
        case "WITHDRAWAL" : 
            return state - action.amount;
        case "COLLECT_INTEREST" : 
            return state * 1.03;
        case "DELETE_ACCOUNT" : 
            return 0;
        default : 
            return state;
    }
}

export default bankingReducer;