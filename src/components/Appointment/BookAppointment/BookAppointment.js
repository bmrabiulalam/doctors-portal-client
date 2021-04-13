import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '554cd34970ce563f71a8b8',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '08:00 AM - 09:00 AM',
        totalSpace: 10
    },
    {
        _id: '554cd34970cec6e210f0c1',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:30 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '554cd34970cec6e215f0a5',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '06:30 AM - 09:30 AM',
        totalSpace: 10
    },
    {
        _id: '554cd34970ce563f71a8b8',
        id: 4,
        subject: 'Teeth Orthodontics',
        visitingHour: '08:00 AM - 09:00 AM',
        totalSpace: 10
    },
    {
        _id: '554cd34970cec6e2f4d9b3',
        id: 5,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:30 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '554cd34970cec6e2cdb0e4',
        id: 6,
        subject: 'Teeth Cleaning',
        visitingHour: '06:30 AM - 09:30 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Available appointments on {date.toDateString()}</h2>
            <div className="row d-flex">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;