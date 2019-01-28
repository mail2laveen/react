import { POSTS, USERS } from "../type/jph";

const initialState = {
    posts: [],
    users: []
}

const jphReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS:
            state = {
                ...state,
                posts: action.payload
            }
            break;
        case USERS:
            state = {
                ...state,
                users: action.payload
            }
            break;

        default:
            break;
    }
    return state;
}

export default jphReducer;