import * as actionTypes from "../../../actions/actionTypes"
import initialState from "../../initialState";

export default function changeXsiTypeReducer(state=initialState.currentXsiType,action) {
    switch (action.type) {
        case actionTypes.CHANGE_XSI_TYPE:
            return action.payload
        default:
            return state;
    }
}
