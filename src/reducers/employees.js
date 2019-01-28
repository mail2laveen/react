import {FETCH_ALL_EMPLOYEES,FETCH_SINGLE_EMPLOYEE,NEW_EMPLOYEE} from  "../type/employee";
const initialState={
    employees:[],
    employee:{}
}

const empReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ALL_EMPLOYEES:
        state={
            ...state,
            employees:action.payload
        }
            break;
            case FETCH_SINGLE_EMPLOYEE:
            state={
                ...state,
                employee:action.payload
            }
            break;
            case NEW_EMPLOYEE:
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

export default empReducer;