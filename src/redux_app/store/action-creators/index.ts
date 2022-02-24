import * as UserActionCreators from "../action-creators/user" 
import * as TodoActionCreators from "../action-creators/todos"
export default {
    ...UserActionCreators,
    ...TodoActionCreators
}