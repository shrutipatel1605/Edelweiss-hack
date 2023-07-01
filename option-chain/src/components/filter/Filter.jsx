import React, { useState } from 'react';
import './FilterOptions.css'; 

const FilterOptions = () => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');

  const handleOption1Change = (event) => {
    setOption1(event.target.value);
  };
  const handleOption2Change = (event) => {
    setOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setOption3(event.target.value);
  };

  const handleOption4Change = (event) => {
    setOption4(event.target.value);
  };

  return (
    <div className="filter-options">
      <label htmlFor="filter1">View Options Contracts for:</label>
      <select id="filter1" value={option1} onChange={handleOption1Change}>
        <option value="">Select an option</option>
        <option value="NIFTY">NIFTY</option>
        <option value="finnifty">finnifty</option>
        <option value="banknifty">banknifty</option>
        <option value="midcpnifty">midcpnifty</option>
      </select>

      <label htmlFor="filter2">Filter 2:</label>
      <select id="filter2" value={option2} onChange={handleOption2Change}>
        <option value="">Select an option</option>
        <option value="NIFTY">NIFTY</option>
        <option value="finnifty">finnifty</option>
        <option value="banknifty">banknifty</option>
        <option value="midcpnifty">midcpnifty</option>
      </select>

      <label htmlFor="filter3">Filter 3:</label>
      <select id="filter3" value={option3} onChange={handleOption3Change}>
        <option value="">Expiry Date</option>
        <option value="NIFTY">NIFTY</option>
        <option value="finnifty">finnifty</option>
        <option value="banknifty">banknifty</option>
        <option value="midcpnifty">midcpnifty</option>
      </select>

      <label htmlFor="filter4">Filter 4:</label>
      <select id="filter4" value={option4} onChange={handleOption4Change}>
        <option value="">Strike Price</option>
        <option value="NIFTY">NIFTY</option>
        <option value="finnifty">finnifty</option>
        <option value="banknifty">banknifty</option>
        <option value="midcpnifty">midcpnifty</option>
      </select>
    </div>
  );
};

export default FilterOptions;
