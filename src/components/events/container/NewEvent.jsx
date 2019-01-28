import React, { Component } from 'react'

import {insertEvent} from "../../../actions/events";
import propTypes from "prop-types";

import {connect} from 'react-redux';
class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: '',
            eventCode: '',
            eventName: '',
            description: '',
            startDate: '',
            endDate: '',
            fees: '',
            seatsFilled: '',
            logo: 'images/noimage.png'
        }
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
           this.props.insertEvent(this.state);
       
    }
    render() {
        let title = "New Event Registration!!"
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="eventId">Event Id</label>
                            <input type="text" className="form-control" id="eventId" name="eventId" aria-describedby="eventId" placeholder="Enter eventId"
                                onChange={e => this.change(e)} value={this.state.eventId} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventCode">Event Code</label>
                            <input type="text" className="form-control" id="eventCode" name="eventCode" aria-describedby="eventCode" placeholder="Enter eventCode"
                                onChange={e => this.change(e)} value={this.state.eventCode} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" className="form-control" id="eventName" name="eventName" aria-describedby="eventName" placeholder="Enter eventName" onChange={e => this.change(e)} value={this.state.eventName} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="description" name="description" aria-describedby="description" placeholder="Enter Description"
                                onChange={e => this.change(e)} value={this.state.description} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <input type="date" className="form-control" id="startDate" name="startDate" aria-describedby="startDate" placeholder="Enter StartDate"
                                onChange={e => this.change(e)} value={this.state.startDate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">End Date</label>
                            <input type="date" className="form-control" id="endDate" name="endDate" aria-describedby="endDate" placeholder="Enter endDate"
                                onChange={e => this.change(e)} value={this.state.endDate} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fees">Fees</label>
                            <input type="number" className="form-control" id="fees" name="fees" aria-describedby="fees" placeholder="Enter Fees"
                                onChange={e => this.change(e)} value={this.state.fees} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="seatsFilled">SeatFilled</label>
                            <input type="number" className="form-control" id="seatsFilled" name="seatsFilled" aria-describedby="seatsFilled" placeholder="Enter SeatsFilled"
                                onChange={e => this.change(e)} value={this.state.seatsFilled} />
                        </div>
                        <div align="center">
                            <button type="button" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Register Event</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

NewEvent.propTypes={
    insertEvent:propTypes.func.isRequired
}

const mapStateToProps= state =>({
    confirmation:state.eventsReducer.confirmation
});

 export default connect(mapStateToProps,{insertEvent})(NewEvent)