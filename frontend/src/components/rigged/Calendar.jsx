import Sidebar from "../general/Sidebar";


import React, { useEffect, useState } from 'react'
import { ViewState, resource, ViewSwitcher, Toolbar } from '@devexpress/dx-react-scheduler';
//import { Scheduler, Appointments, CurrentTimeIndicator, DayView, WeekView, MonthView } from '@devexpress/dx-react-scheduler-material-ui';
import Scheduler from 'devextreme-react/scheduler';

import { data } from './data.js';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var today = yyyy + '-' + mm + '-' + dd;

var currentDate = today;
var schedulerData = [
    { startDate: today + 'T10:00', endDate: today + 'T10:30', title: 'Yoink' },
    { startDate: today + 'T13:00', endDate: today + 'T20:00', title: 'Code' },
    { startDate: today + 'T17:00', endDate: today + 'T18:00', title: 'Dinner' },
];


var views = ['day', 'week', 'workWeek', 'month'];

class Calandar extends React.Component{

    // const [events, setEvents] = useState([])
    // const [schedulerData, setSchedulerData] = useState([])

    // useEffect(() => {
    //     loadEvents();
    // }, [])

    // useEffect(() => {
    //     let data = [schedulerData];
    //     for (let event of events) {
    //         let {eventName, startTime, endTime} = event;
    //         data.push({startDate: startTime, endDate: endTime, title: eventName })
    //     }
    //     console.log(data)
    //     setSchedulerData(data);
    // }, [events])
    
    // const loadEvents = () => {
    //     getEvents(setEvents);
    // }
    render(){
        return(
            <div className="wrapper">
                <Sidebar/>
                <div class="base">
                    <div class="text">Calandar</div>

                    <div class="calendar">
                        <Scheduler data={schedulerData}
                            views={views}
                            defaultCurrentView='week'
                            defaultCurrentDate={currentDate}
                            firstDayOfWeek={1}
                            startDayHour={6}
                            endDayHour={21}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calandar;