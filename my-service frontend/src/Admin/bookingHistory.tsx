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
  phoneNumber: number;
}

// Destructure the props with the defined types
const BookingCard: React.FC<BookingCardProps> = ({ date, price, location, phoneNumber }) => {
  return (
    <div style={{display:'flex'}}>
        <div>
    <Card className="booking-card"style={{ width: '300px',margin:"10px", height: '200px', backgroundColor: '#e0e0e0' }}>
      <CardContent>
        <Typography variant="h6">Date: {date}</Typography>
        <Typography variant="body1">Price: {price}</Typography>
        <Typography variant="body1">Location: {location}</Typography>
        <Typography variant="body1">Phone Number: {phoneNumber}</Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
};

const BookingList: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingCardProps[]>([]);

  useEffect(() => {
    // Make a GET request to the API
    axios.get('http://localhost:4000/list/list')
    .then(response => {
        const apiData = response.data.data;
        console.log(apiData); // Log the actual data structure
        setBookingData(apiData.map((item: any) => ({
          date: item.date,
          price: item.priceValue,
          location: item.location,
          phoneNumber: item.phoneNumber,
        })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Booking</h2>
      {bookingData && bookingData.map((booking, index) => (
        <BookingCard key={index} {...booking} />
      ))}
    </div>
  );
};

export default BookingList;
