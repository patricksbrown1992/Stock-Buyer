import { combineReducers } from "redux";
import entitiesReducer from "./entities/entitiesReducer";
import sessionReducer from "./sessionReducer";
import errorsReducer from "./errors/sessionErrorsReducer";
import uiReducer from "./uiReducer/uiReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
  errors: errorsReducer,
});

export default rootReducer;
