import * as actionTypes from "./actionTypes";


export function changeTakasCode (takasCode) {
    return {type : actionTypes.CHANGE_TAKAS_CODE, payload:takasCode}
}


export function getTakasCodesSuccess(takasCodes){
    return {type:actionTypes.GET_TAKAS_CODES_SUCCESS,payload:takasCodes}
}

export function getTakasCodes(){
    return function (dispatch){
        let url ="http://localhost:8080/v1/api/takasCodes"
        return fetch(url)
            .then(response =>response.json())
            .then(result =>dispatch(getTakasCodesSuccess(result)));
    }
}
