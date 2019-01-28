import { FETCH_ALL_EVENTS,FETCH_SINGLE_EVENT, NEW_EVENT } from "../type/events";

const initialState={
    items:[],
    item:{}
}

const eventsReducer= (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            state={
                ...state,
                items:action.payload
            }
            break;
            case FETCH_SINGLE_EVENT:
            state={
                ...state,
                item:action.payload
            }
            break;
            case NEW_EVENT:
            state={
                ...state,
                confirmation:action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

export default eventsReducer;