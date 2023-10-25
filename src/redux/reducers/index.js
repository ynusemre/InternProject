import {combineReducers} from "redux";
import changeMessageNameReducer from "./messageReducers/messageName/changeMessageNameReducer";
import messageNameListReducer from "./messageReducers/messageName/messageNameListReducer";
import changeXsiTypeReducer from "./messageReducers/xsiType/changeXsiTypeReducer";
import xsiTypeListReducer from "./messageReducers/xsiType/xsiTypeListReducer";
import changeTakasCodeReducer from "./takasCodeReducers/changeTakasCodeReducer";
import takasCodeListReducer from "./takasCodeReducers/takasCodeListReducer";
import xmlPartShowReducer from "./xmlPartReducers/xmlPartShowReducer";
import structureReducer from "./structureReducers/structureReducer";




const rootReducer = combineReducers({
    changeXsiTypeReducer,
    xsiTypeListReducer,
    changeMessageNameReducer,
    messageNameListReducer,
    changeTakasCodeReducer,
    takasCodeListReducer,
    xmlPartShowReducer,
    structureReducer,
})

export default rootReducer;
