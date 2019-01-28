import {  FETCH_ALL_EMPLOYEES,FETCH_SINGLE_EMPLOYEE,NEW_EMPLOYEE} from "../type/employee";

export const fetchEmployees=()=>(dispatch)=>{
    fetch("http://localhost:9090/api/employees").then(
        response => response.json()
    ).then(
        mongoEmps=> dispatch({
            type:FETCH_ALL_EMPLOYEES,
            payload:mongoEmps
        }),
        reason => console.log(reason)
    )
    
}

export const fetchSingleEmployee=(id)=>(dispatch)=>{
    fetch("http://localhost:9090/api/employees/" + id).then(
        response => response.json()
    ).then(
        mongoEmp=> dispatch({
            type:FETCH_SINGLE_EMPLOYEE,
            payload:mongoEmp
        }),
        reason => console.log(reason)
    )
    
}

export const insertEmployee=(employee) =>(dispatch)=>{
    fetch("http://localhost:9090/api/employees", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(employee)
    }).then(res => res.json()).then((msg)  =>dispatch( {
        type:NEW_EMPLOYEE,
        payload:msg
       
    
    }))
}
