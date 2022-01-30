import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from './../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 20
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 15
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 17
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 25
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 15
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 20
    },
]


const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', my: 3 }}>available appointment on {date.toDateString()} </Typography>
            {
                bookingSuccess && <Alert severity="success">Congratulation! Appointment Booked successfully.</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} date={date} booking={booking} setBookingSuccess={setBookingSuccess} price={booking.price} />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;