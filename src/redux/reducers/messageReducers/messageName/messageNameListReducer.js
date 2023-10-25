import * as actionTypes from "../../../actions/actionTypes"
import initialState from "../../initialState";



export default function messageNameListReducer(state = initialState.messageNames,action){
    switch (action.type) {
        case actionTypes.GET_MESSAGE_NAMES_SUCCESS :
            return action.payload
        default:
            return state;
    }
}
