import initialState from "../initialState";
import * as actionTypes from "../../actions/actionTypes";

export default function xmlPartShowReducer(state = initialState.xmlMessageNamePart,action){
    switch (action.type) {
        case actionTypes.GET_XML_MESSAGE_NAME_PART_SUCCESS :
            return action.payload
        default:
            return state;
    }
}
