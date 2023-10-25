import * as actionTypes from "./actionTypes"


export function changeXsiType (xsiType) {
    return {type : actionTypes.CHANGE_XSI_TYPE, payload:xsiType}
}

export function getXsiTypesSuccess(xsiTypes){
    return {type:actionTypes.GET_XSI_TYPES_SUCCESS,payload:xsiTypes}
}


export function getXsiTypes(){

    return function (dispatch){
        let url ="http://localhost:8080/v1/api/messages/xsiTypes"
        return fetch(url)
            .then(response =>response.json())
            .then(result =>dispatch(getXsiTypesSuccess(result)));
    }
}

/*************************************************************************************************************/

export function changeMessageName(messageName){
    return {type:actionTypes.CHANGE_MESSAGE_NAME,payload:messageName}
}

export function getMessageNamesSuccess(messageNames){
    return {type:actionTypes.GET_MESSAGE_NAMES_SUCCESS,payload:messageNames}
}

export function getMessageNames(xsiType){
    return function (dispatch){
        let url = "http://localhost:8080/v1/api/messages/messageNames/"
        if (xsiType){
            url+=xsiType
        }
        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getMessageNamesSuccess(result)))
    }
}

/*************************************************************************************************************/

export function getXmlMessageNamePartSuccess(xmlMessageNamePart){
    return {type:actionTypes.GET_XML_MESSAGE_NAME_PART_SUCCESS,payload:xmlMessageNamePart}
}

export function getXmlMessageNamePart(messageName){
    return function (dispatch){
        let url = "http://localhost:8080/v1/api/messages/xmlMessageNamePart/"
        if (messageName){
            url+=messageName
        }
        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getXmlMessageNamePartSuccess(result)))
    }
}

/*************************************************************************************************************/


