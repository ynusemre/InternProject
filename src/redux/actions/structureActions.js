import * as actionTypes from "./actionTypes";


export function getStructureSuccess(structures){
    return {type:actionTypes.GET_STRUCTURE_SUCCESS,payload:structures}
}

export function getStructure(messageName){
    return function (dispatch){
        let url = "http://localhost:8080/v1/api/messages/xmlMessageNamePartStructureList/"
        if (messageName){
            url+=messageName
        }
        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getStructureSuccess(result)))
    }
}
