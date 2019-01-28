import {POSTS} from "../type/jph";

export const fetchPosts=()=>(dispatch)=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(
        response => response.json()
    ).then(
        mongoEvents=> dispatch({
            type:POSTS,
            payload:mongoEvents
        }),
        reason => console.log(reason)
    )
    
}