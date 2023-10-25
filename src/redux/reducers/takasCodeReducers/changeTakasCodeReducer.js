import initialState from "../initialState";
import * as actionTypes from "../../actions/actionTypes";

export default function changeTakasCodeReducer(state= initialState.currentTakasCode,action) {
    switch (action.type) {
        case actionTypes.CHANGE_TAKAS_CODE:
            return action.payload
        default:
            return state;
    }
}
