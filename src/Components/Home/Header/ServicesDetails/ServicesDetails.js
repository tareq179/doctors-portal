import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'60px'}} src={service.img} alt=""/>
            <h3 className="mt-4 mb-4">{service.name}</h3>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium ex, quo libero aperiam eligendi!</p>
        </div>
    );
};

export default ServicesDetails;