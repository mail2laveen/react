import React, { Component } from 'react'
import{connect} from 'react-redux';
import propTypes from "prop-types";
import {  fetchEvents} from "../../../actions/events";
class EventsList extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     syneEvents:[],
           // eventDetails:null
        }
    componentDidMount(){
       this.props.fetchEvents();
    }
    onNavigate(e,id){
        this.props.history.push("/eventdetails/"+id);
    }

    // onEventSelection(currentEvent){
    //     this.setState({
    //         eventDetails:currentEvent
    //     })
    // }
    render() {
        console.log("Inside Render Method in EventList")
        let title = "Synechron Events List";
        let subTitle = "Published by Synechron HR Pune";
        return (
            <div>
                <h1>{title}</h1>
                <hr />
                <h5>{subTitle}</h5>
                <br />
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Event Code</th>
                            <th>Event Name</th>
                            <th>Start Date</th>
                            <th>Fees</th>
                            <th>Show Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.props.events.map((event, idx) =>
                                <tr key={idx}>
                                    <td><span>{event.eventCode}</span></td>
                                    <td><span>{event.eventName}</span></td>
                                    {/* <td><span>{event.startDate.toString()}</span></td> */}
                                    <td><span>{event.startDate &&
                                        new Intl.DateTimeFormat("hi",{
                                            year:'numeric',
                                            month:'short',
                                            day:'2-digit'
                                        }).format(Date.parse(event.startDate))
                                    }</span></td>
                                    <td><span>{
                                        new Intl.NumberFormat("id-ID",{
                                            style:'currency',
                                            currency:'IDR',
                                            minimumFractionDigits:2,
                                            maximumFractionDigits:2
                                        }).format(event.fees)}</span></td>
                                    <td>
                                        <button className="btn btn-primary"  onClick={(e)=>this.onNavigate(e,event.eventId)}>Show Details!</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {/* <div>
                    {
                        this.state.eventDetails && <EventDetails event={this.state.eventDetails}/>
                    }
                </div> */}
                
            </div>
        )
    }
}


EventsList.propTypes={
   
    events:propTypes.array.isRequired,
    fetchEvents:propTypes.func.isRequired
}

const mapStateToProps= state=>({
    events:state.eventsReducer.items
});

export default connect(mapStateToProps,{fetchEvents})(EventsList)