import * as actionTypes from "../../../actions/actionTypes"
import initialState from "../../initialState";


export default function xsiTypeListReducer(state = initialState.xsiTypes,action){
    switch (action.type) {
        case actionTypes.GET_XSI_TYPES_SUCCESS :
            return action.payload
        default:
            return state;
    }
}
