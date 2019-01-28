import React, { Component } from 'react'

import {  fetchEmployees} from "../../../actions/employees";
import{connect} from 'react-redux';
import propTypes from "prop-types";
 class EmployeeList extends Component {constructor(props) {
    super(props);
    // this.state={
    //     syneEmployees:[],
    //    // employeeDetails:null
    // }
}
componentDidMount(){
   this.props.fetchEmployees();
}
// onEventSelection(currentEvent){
//     this.setState({
//         employeeDetails:currentEvent
//     })
// }

onNavigate(e,id){
    this.props.history.push("/employeeDetails/"+id);
}
render() {
    let title = "Synechron Employee List";
     return (
        <div>
            <h1>{title}</h1>
            <hr />
           
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>City</th>
                        <th>Email Id</th>
                        <th>Contact </th>
                        <th>Show Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     this.props.employees.map((employee, idx) =>
                            <tr key={idx}>
                                <td><span>{employee.employeeName}</span></td>
                                <td><span>{employee.city}</span></td>
                                <td><span>{employee.emailId}</span></td>
                                <td><span>{employee.contactNumber}</span></td>
                                <td>
                                    {/* <button className="btn btn-primary" onClick={()=>this.onEventSelection(employee)}>Show Details!</button> */}
                                    <button className="btn btn-primary" onClick={(e)=>this.onNavigate(e,employee.employeeId)}>Show Details!</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* <div>
                    {
                        this.state.employeeDetails && <EmployeeDetails employee ={this.state.employeeDetails}/>
                    }
                </div> */}
        </div>
    )
}
}


EmployeeList.propTypes={
   
    employees:propTypes.array.isRequired,
    fetchEmployees:propTypes.func.isRequired
}

const mapStateToProps= state=>({
    employees:state.empReducer.employees
});

export default connect(mapStateToProps,{fetchEmployees})(EmployeeList)