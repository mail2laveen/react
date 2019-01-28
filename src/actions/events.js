import {  FETCH_ALL_EVENTS,FETCH_SINGLE_EVENT,NEW_EVENT} from "../type/events";

export const fetchEvents=()=>(dispatch)=>{
    fetch("http://localhost:9090/api/events").then(
        response => response.json()
    ).then(
        mongoEvents=> dispatch({
            type:FETCH_ALL_EVENTS,
            payload:mongoEvents
        }),
        reason => console.log(reason)
    )
    
}

export const fetchSingleEvent=(id)=>(dispatch)=>{
    fetch("http://localhost:9090/api/events/" + id).then(
        response => response.json()
    ).then(
        mongoEvent=> dispatch({
            type:FETCH_SINGLE_EVENT,
            payload:mongoEvent
        }),
        reason => console.log(reason)
    )
    
}

export const insertEvent=(event) =>(dispatch)=>{
    fetch("http://localhost:9090/api/events", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(event)
    }).then(res => res.json()).then((msg)  =>dispatch( {
        type:NEW_EVENT,
        payload:msg
       
    
    }))
}
