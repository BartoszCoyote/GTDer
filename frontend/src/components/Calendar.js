
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as actions from '../action';
import { connect } from 'react-redux';
import './Calendar.css';
import { Button } from 'react-bootstrap';


let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends Component {



  componentWillMount()
  {
    this.props.getAllTasks()

    
  }

  render() {

    const { task } = this.props;
    
    if (!task || !Array.isArray(task)) {
    	return null;
    }
    console.log(task)

    const events = task.map(({ id, name, selectedDay }) => ({
      id,
      title: name,
      start: new Date(selectedDay),
      end: new Date(selectedDay)
    }));

    console.log(events)
   return(

    <div className="App">
               <Button className="btn btn-primary btn-lg" onClick={() => { this.props.history.goBack(); }}>Back</Button>

    <BigCalendar
   events={events}
   views={allViews}
   step={60}
   defaultDate={new Date(2018, 1, 0)}
   />

   </div>      
    )
  }
}
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))



function mapStateToProps(state) {
  return { task: state.task };
}



export default connect(mapStateToProps, actions)(Calendar);