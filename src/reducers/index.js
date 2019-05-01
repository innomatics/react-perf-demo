import { combineReducers } from "redux";

import auth from "./auth";
import makes from "./makes";

const appReducer = combineReducers({ auth, makes });

const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_REQUEST) {
  //   // Local Storage wipe
  //   Object.keys(state).forEach(key => {
  //     localStorage.removeItem(`persist:${key}`);
  //   });
  //   // Service worker hose
  //   caches.keys().then(names => {
  //     for (const name of names) caches.delete(name);
  //   });
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
