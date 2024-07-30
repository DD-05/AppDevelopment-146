import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/css/Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedMainService, setSelectedMainService] = useState('');
  const [selectedInnerService, setSelectedInnerService] = useState('');
  const [amount, setAmount] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const services = {
    'Air Freight': [
      { name: 'Express Shipping', amount: 15000 },
      { name: 'Standard Air Freight', amount: 10000 },
      { name: 'Charter Services', amount: 30000 },
      { name: 'Door-to-Door Air Freight', amount: 20000 },
      { name: 'Perishable Goods Shipping', amount: 25000 },
    ],
    'Ground Freight': [
      { name: 'Full Truckload (FTL)', amount: 8000 },
      { name: 'Less Than Truckload (LTL)', amount: 4000 },
      { name: 'Dedicated Fleet Services', amount: 12000 },
      { name: 'Expedited Ground Shipping', amount: 6000 },
      { name: 'Cross-Docking Services', amount: 5000 },
      { name: 'Intermodal Transportation', amount: 7000 },
    ],
    'Sea Freight': [
      { name: 'Full Container Load (FCL)', amount: 10000 },
      { name: 'Less Than Container Load (LCL)', amount: 5000 },
      { name: 'Refrigerated Container Shipping', amount: 12000 },
      { name: 'Roll-on/Roll-off (RoRo) Shipping', amount: 15000 },
      { name: 'Break Bulk Shipping', amount: 18000 },
      { name: 'Project Cargo Shipping', amount: 25000 },
    ]
  };

  const handleMainServiceChange = (event) => {
    const selected = event.target.value;
    setSelectedMainService(selected);
    setSelectedInnerService('');
    setAmount(0);
  };

  const handleInnerServiceChange = (event) => {
    const selected = event.target.value;
    const innerService = services[selectedMainService].find(service => service.name === selected);
    setSelectedInnerService(innerService.name);
    setAmount(innerService.amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCardDetails()) {
      // Handle successful form submission
      setSuccessMessage('Paid Successfully');
      // Optionally, you can clear the form after submission
      setCardNumber('');
      setCardName('');
      setExpirationDate('');
      setCvv('');
      setSelectedMainService('');
      setSelectedInnerService('');
      setAmount(0);
    }
  };

  const validateCardDetails = () => {
    let isValid = true;
    let errorMessage = '';

    // Card Number Validation
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
      errorMessage += 'Card Number must be 16 digits.\n';
      isValid = false;
    }

    // Cardholder Name Validation
    if (cardName.trim() === '') {
      errorMessage += 'Cardholder Name cannot be empty.\n';
      isValid = false;
    }

    // Expiration Date Validation
    const expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationPattern.test(expirationDate)) {
      errorMessage += 'Expiration Date must be in MM/YY format.\n';
      isValid = false;
    } else {
      const [month, year] = expirationDate.split('/').map(Number);
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        errorMessage += 'Card has expired.\n';
        isValid = false;
      }
    }

    // CVV Validation
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
      errorMessage += 'CVV must be 3 digits.\n';
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
    }

    return isValid;
  };

  return (
    <div className="payment-container">
      <div className="hero-section1">
        <h1>Payment Processing</h1>
        <p>Please complete your payment to finalize your order.</p>
      </div>
      <div className="payment-summary">
        <h2 style={{color:'black'}}>Order Summary</h2>
        <div className="summary-item">
          <h3>Main Service:</h3>
          <select value={selectedMainService} onChange={handleMainServiceChange}>
            <option value="">Select a main service</option>
            {Object.keys(services).map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        {selectedMainService && (
          <div className="summary-item">
            <h3>Inner Service:</h3>
            <select value={selectedInnerService} onChange={handleInnerServiceChange}>
              <option value="">Select an inner service</option>
              {services[selectedMainService].map(service => (
                <option key={service.name} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
        )}
        <div className="summary-item">
          <h3>Total Amount:</h3>
          <p>₹{amount}</p>
        </div>
      </div>
      <div className="payment-form">
        <h2 style={{color:'black'}}>Enter Card Payment Details</h2>
        <form onSubmit={handleSubmit} className="card-details-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cardholder Name"
                variant="outlined"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                label="Expiration Date"
                variant="outlined"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
      <div className="cta-section1">
        <Link to='/Homepage'>
          <button className="cta-button1">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;