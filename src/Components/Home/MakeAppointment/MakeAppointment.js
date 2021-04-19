import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5">
                        <h5 className="text-primary">APPOINTMENT</h5>
                        <h1>Make an Appointment <br/> Today</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Delectus ratione quibusdam sint eaque ea amet aperiam rem quos sit blanditiis.
                        </p> 
                        <button className="btn btn-primary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;