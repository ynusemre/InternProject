import initialState from "../initialState";
import * as actionTypes from "../../actions/actionTypes";

export default function structureReducer(state = initialState.structures,action){
    switch (action.type) {
        case actionTypes.GET_STRUCTURE_SUCCESS :
            return action.payload
        default:
            return state;
    }
}
