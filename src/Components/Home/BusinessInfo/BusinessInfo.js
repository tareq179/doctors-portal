import React from 'react';
import { faClock, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';
import '../InfoCard/InfoCard.css';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon:faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 1003 USA',
        icon:faMapMarked,
        background: 'dark'
    },
    {
        title: 'Contact Us now',
        description: '+101825351514',
        icon:faPhone,
        background: 'primary'
    },
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
        </div>
        </section>
    );
};

export default BusinessInfo;