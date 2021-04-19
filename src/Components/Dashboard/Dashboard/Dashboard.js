import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../../App";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    useEffect(()=>{
        fetch('http://localhost:5000/appointmentsByDate',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({date:selectedDate, email:loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data => setAppointments(data))
    },[selectedDate])
    return (
        <section>
            <div style={{ backgroundColor: "#F4FDFB"}} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-5 col-sm-12 col-12 justify-content-center">
                    <h1>Appointment</h1>
                    <Calendar  onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <AppointmentsByDate appointments={appointments} date={selectedDate}/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;