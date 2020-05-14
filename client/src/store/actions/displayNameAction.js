import {
    SET_DISPLAYNAME
} from "./actionTypes";

export const setDisplayName = (displayName) => {
    return dispatch => {
        dispatch({
            type: SET_DISPLAYNAME,
            displayName: displayName
        })
    }
}