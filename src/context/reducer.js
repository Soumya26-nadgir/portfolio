import {ADD_USER, REM_USER} from "./action.types"


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case ADD_USER: 
            return [...state, action.payload]
           
        case REM_USER:
            return state.filter(user => user.id !== action.payload)
    
        default:
            return state;
    }
}