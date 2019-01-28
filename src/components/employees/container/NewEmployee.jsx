import React, { Component } from 'react'

import {insertEmployee} from "../../../actions/employees";
import propTypes from "prop-types";

import {connect} from 'react-redux';
class NewEmployee extends Component {
    constructor(props){
        super(props);
        this.state=({
            employeeId:'',
            employeeName:'',
            address:'',
            city:'',
             state:'',
            country:'',
            joiningDate:'',
            emailId:'',
            contactNumber:''

        })
    }
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onNavigate(){
        this.props.history.push("/employees");
       }
    
    onSubmit(e) {
        this.props.insertEmployee(this.state);
    }
    render() {
        let title = "New Employee Registration!!"
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="employeeId">Employee Id</label>
                            <input type="text" className="form-control" id="employeeId" name="employeeId" aria-describedby="employeeId" placeholder="Enter employeeId"
                                onChange={e => this.change(e)} value={this.state.employeeId} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" className="form-control" id="employeeName" name="employeeName" aria-describedby="employeeName" placeholder="Enter employeeName"
                                onChange={e => this.change(e)} value={this.state.employeeName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" name="address" aria-describedby="address" placeholder="Enter address" onChange={e => this.change(e)} value={this.state.address} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" name="city" aria-describedby="city" placeholder="Enter city"
                                onChange={e => this.change(e)} value={this.state.city} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" name="state" aria-describedby="state" placeholder="Enter state"
                                onChange={e => this.change(e)} value={this.state.state} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="form-control" id="country" name="country" aria-describedby="country" placeholder="Enter country"
                                onChange={e => this.change(e)} value={this.state.country} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="joiningDate">Joining Date</label>
                            <input type="date" className="form-control" id="joiningDate" name="joiningDate" aria-describedby="joiningDate" placeholder="Enter joiningDate"
                                onChange={e => this.change(e)} value={this.state.joiningDate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailId">SeatFilled</label>
                            <input type="text" className="form-control" id="emailId" name="emailId" aria-describedby="emailId" placeholder="Enter emailId"
                                onChange={e => this.change(e)} value={this.state.emailId} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber">ContactNumber</label>
                            <input type="text" className="form-control" id="contactNumber" name="contactNumber" aria-describedby="contactNumber" placeholder="Enter contactNumber"
                                onChange={e => this.change(e)} value={this.state.contactNumber} />
                        </div>

                        <div align="center">
                            <button type="button" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Register Employee</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


NewEmployee.propTypes={
    insertEmployee:propTypes.func.isRequired
}

const mapStateToProps= state =>({
    confirmation:state.eventsReducer.confirmation
});

 export default connect(mapStateToProps,{insertEmployee})(NewEmployee)