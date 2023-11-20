

// chatgpt-----------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './booking.css'; 
import cars1 from '../Assets/rr3.jpeg';
import cars2 from '../Assets/carwash2.jpg';
import cars3 from '../Assets/carwash3.jpg';
import axios from 'axios';
const CardDeck: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    location: 'Thrissur', 
    price: 1200, 
    phoneNo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigateToBookNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4000/booking/booking', {
        location: formData.location,
        priceValue: formData.price,
        phoneNumber: formData.phoneNo,
      });
   if ((response.status) == 201){
    console.log('Data entered successfully', response.data);
    alert('your slot is successfully booked');
   }else{
    alert('please try again after 15 minutes');
   }
     
      
    } catch (error) {
      console.error('Error:', error);
      alert('please try again after 15 minutes');
    }
  };
  
  return (
    <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={cars1} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Robotic Carwash</h5>
          <p className="card-text">Price: 1200</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={navigateToBookNow}>
            BOOK NOW
          </button>
        </div>
      </div>
      

<div className="card custom-card-width">
  <div className="card-body">
    <h5 className="card-title">About Our Company</h5>
    <p className="card-text">
      Welcome to BBK Carwash! We provide top-notch robotic carwash services to ensure your vehicle shines like new.
    </p>
    <p className="card-text">
      Our commitment is to deliver exceptional cleaning with the latest technology in the carwash industry.
    </p>
  </div>
</div>


      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNo" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardDeck;
