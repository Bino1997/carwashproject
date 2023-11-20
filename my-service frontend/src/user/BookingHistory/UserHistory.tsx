import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';

// Define the prop types for the BookingCard component
interface BookingCardProps {
  date: string;
  price: number;
  location: string;
}

// Destructure the props with the defined types
const BookingCard: React.FC<BookingCardProps> = ({ date, price, location }) => {
  return (
    <Card className="booking-card" style={{ width: '300px', height: '200px', backgroundColor: '#e0e0e0' }}>
      <CardContent>
        <Typography variant="body1">Price: {price}</Typography>
        <Typography variant="body1">Location: {location}</Typography>
        <Typography variant="body1">Date: {date}</Typography>
      </CardContent>
    </Card>
  );
};

const BookingHistory: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingCardProps[]>([]); // Initialize as an empty array

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    axios.get('http://localhost:4000/api/userviewsingleitem', {
      headers: {
        Authorization: `Bearer ${userToken}`,      },
    })
      .then(response => {
        const apiData = response.data;

        // Update the state with the fetched data
        setBookingData(apiData.map((item: any) => ({
          date: item.date,
          price: item.priceValue,
          location: item.location,
        })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Booking</h2>
      {bookingData.map((data, index) => <BookingCard key={index} {...data} />)}
    </div>
  );
};

export default BookingHistory;
