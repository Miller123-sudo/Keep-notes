import noteReducer from "./NoteReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  noteReducer,
});

export default rootReducer;
