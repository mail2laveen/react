import React, { Component } from 'react';
import {  fetchUsers} from "../../../actions/jph-users";
import{connect} from 'react-redux';
import propTypes from "prop-types";
class Users extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     users:[]
        // }
    }
    componentDidMount(){
        this.props.fetchUsers();
}

    render() {
        let title="Json Place Holde Users!"
        return (
            <div>
                <h1>{title}</h1>
                <br/>

                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Zip Code</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.users.map((user,idx)=>
                    <tr key={idx}>
                        <td><span>{user.name}</span></td>
                        <td><span>{user.email}</span></td>
                        <td><span>{user.address.city}</span></td>
                        <td><span>{user.address.zipcode}</span></td>
                        <td><span>{user.phone}</span></td>
                        <td><span><a href= {'http://'+user.website} >{user.website}</a></span></td>
                        <td><span>{user.company.name}</span></td>
                    </tr>
                   
                )
                    }
                     </tbody>
                </table>
                
            </div>
        )
    }
}



Users.propTypes={
   
    users:propTypes.array.isRequired,
    fetchUsers:propTypes.func.isRequired
}

const mapStateToProps= state=>({
    users:state.jphReducer.users
});

export default connect(mapStateToProps,{fetchUsers})(Users)