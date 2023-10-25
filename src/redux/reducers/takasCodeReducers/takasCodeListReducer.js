import initialState from "../initialState";
import * as actionTypes from "../../actions/actionTypes";

export default function takasCodeListReducer(state = initialState.takasCodes,action){
    switch (action.type) {
        case actionTypes.GET_TAKAS_CODES_SUCCESS :
            return action.payload
        default:
            return state;
    }
}
