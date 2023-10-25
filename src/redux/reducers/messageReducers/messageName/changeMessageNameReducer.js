import * as actionTypes from "../../../actions/actionTypes"
import initialState from "../../initialState";

export default function changeMessageNameReducer(state=initialState.currentMessageName,action) {
    switch (action.type) {
        case actionTypes.CHANGE_MESSAGE_NAME:
            return action.payload
        default:
            return state;
    }
}
