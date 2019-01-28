import React, { Component } from 'react'
import {  fetchSingleEmployee} from "../../../actions/employees";
import{connect} from 'react-redux';
import propTypes from "prop-types";

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     employee: null
        // }
    }
    componentDidMount(){
        this.props.fetchSingleEmployee(this.props.match.params.id)
    }

    

    render() {
        let title = "Details Of - "
        if(this.props.employee){
        return (
            <div>
                 <h1>{title + this.props.employee.employeeName}</h1>
                 <table className="table table-hover table-striped">
                     <tbody>
                         <tr>
                             <th>Employee Id</th>
                             <td>{this.props.employee.employeeId}</td>
                         </tr>
                         <tr>
                             <th>Employee Name</th>
                             <td>{ this.props.employee.employeeName}</td>
                         </tr>
                         <tr>
                             <th>Address</th>
                             <td>{this.props.employee.address}</td>
                         </tr>
                         <tr>
                             <th>City</th>
                             <td>{this.props.employee.city}</td>
                         </tr>
                         <tr>
                             <th>State</th>
                             <td>{this.props.employee.state}</td>
                         </tr>
                         <tr>
                             <th>Country</th>
                             <td>{this.props.employee.country}</td>
                         </tr>
                         <tr>
                             <th>Joining Date</th>
                             <td>{this.props.employee.joiningDate && this.props.employee.joiningDate.toString()}</td>
                         </tr>
                         <tr>
                             <th>Email Id</th>
                             <td>{this.props.employee.emailId}</td>
                         </tr>
                         <tr>
                             <th>Contact Number</th>
                             <td>{this.props.employee.contactNumber}</td>
                         </tr>
                     </tbody>
                 </table>
            </div>
        )
    }
    else{
        return(
            <h1>Loading...</h1>
        )
    }
}
}


EmployeeDetails.propTypes={
   
    employee:propTypes.object.isRequired,
    fetchSingleEmployee:propTypes.func.isRequired
}

const mapStateToProps= state=>({
    employee:state.empReducer.employee
});

export default connect(mapStateToProps,{fetchSingleEmployee})(EmployeeDetails)