import {
    SET_DISPLAYNAME
} from "../actions/actionTypes";
import {setDisplayName} from "../actions/displayNameAction";

const initialState = {
    displayName: ''
}

const DisplayNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISPLAYNAME:
            return{
                ...state,
                displayName: action.displayName
            }
        default:
            return state
    }
}

export default DisplayNameReducer
