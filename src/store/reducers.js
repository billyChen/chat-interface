import { combineReducers } from "redux";
import MessageReducer from './message/reducers'



export default combineReducers(
    {
        messages: MessageReducer
    }
)   