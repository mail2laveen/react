import {createStore,applyMiddleware,compose} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root";

const initialState={};
const middleWares=[logger,thunk];

const store= createStore(rootReducer,initialState,compose(applyMiddleware(...middleWares)
// ,window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
));


export default store;