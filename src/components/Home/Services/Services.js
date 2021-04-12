import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const serviceData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 className='mt-3'>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-4'>
                    {
                        serviceData.map(service => <ServicesDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;