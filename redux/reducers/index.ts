import { combineReducers } from "redux";
import authenReducer from "./authen.reducer";
import authenAdminReducer from "./authen.admin.reducer";

const rootReducer = combineReducers({
  authenWeb: authenReducer,
  authenAdmin: authenAdminReducer,
});

export default rootReducer;
