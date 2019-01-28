import React, { Component } from 'react'
import {fetchSingleEvent} from "../../../actions/events"
import propTypes from "prop-types";

import {connect} from 'react-redux';

class EventDetails extends Component {
    constructor(props) {
        super(props);
        }
    componentDidMount(){
        this.props.fetchSingleEvent(this.props.match.params.id)
        console.log(this.props.fetchSingleEvent(this.props.match.params.id))
    }

    // fetchSingleEvent(id) {
    //    this.props.fetchSingleEvent(this.props.match.params.id);
    // }
    render() {
        debugger;
        let title = "Details Of - "
        if(this.props.event){
        return (
            <div>
                <h1>{title + this.props.event.eventName}</h1>
                <table className="table table-hovered table-striped">
                    <tbody>
                        <tr>
                            <th>Event Id</th>
                            <td>{this.props.event.eventId}</td>
                        </tr>
                        <tr>
                            <th>Event Code</th>
                            <td>{this.props.event.eventCode}</td>
                        </tr>
                        <tr>
                            <th>Event Name</th>
                            <td>{this.props.event.eventName}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{this.props.event.description}</td>
                        </tr>
                        <tr>
                            <th>Start Date</th>
                            <td>{this.props.event.startDate}</td>
                        </tr>
                        <tr>
                            <th>End Date</th>
                            <td>{this.props.event.endDate}</td>
                        </tr>
                        <tr>
                            <th>Fees</th>
                            <td>{this.props.event.fees}</td>
                        </tr>
                        <tr>
                            <th>Seats Filled</th>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                                        role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"
                                        style={
                                            { width: this.props.event.seatsFilled + '%' }
                                        }>{this.props.event.seatsFilled + '%'}</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Logo</th>
                            <td> <img src={'../' + this.props.event.logo} alt={this.props.event.eventName} title={this.props.event.description} />
                            </td>
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

EventDetails.propTypes={
   
    event:propTypes.object.isRequired,
    fetchSingleEvent:propTypes.func.isRequired
}

const mapStateToProps= state=>
({
    event:state.eventsReducer.item
});

export default connect(mapStateToProps,{fetchSingleEvent})(EventDetails)