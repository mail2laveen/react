import {USERS} from "../type/jph";

export const fetchUsers=()=>(dispatch)=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
        response => response.json()
    ).then(
        mongoEvents=> dispatch({
            type:USERS,
            payload:mongoEvents
        }),
        reason => console.log(reason)
    )
    
}