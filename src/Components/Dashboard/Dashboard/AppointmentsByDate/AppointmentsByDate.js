import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments, date}) => {
    console.log(appointments);
    return (
        <div>
            <div className="d-flex">
            <h5 className="text-brand">Appointment</h5>
            <p className="text-right text-secondary">{date.toDateString()}</p>
            </div>
            {
                appointments.length?
                <AppointmentShortList appointments={appointments}/>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;