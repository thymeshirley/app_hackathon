import React, { useState } from 'react';
import { airlineService } from '../api/airlineService';

export const Form: React.FC = () => {
  const [user, setUser] = useState({
    fullName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    passportNumber: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await airlineService.createUser(user);
    airlineService.handleResponse(response);
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="flex flex-col">
      <input name="fullName" onChange={handleChange} placeholder="Full Name" required />
      <input name="gender" onChange={handleChange} placeholder="Gender" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="phoneNumber" onChange={handleChange} placeholder="Phone Number" required />
      <input name="address" onChange={handleChange} placeholder="Address" required />
      <input name="city" onChange={handleChange} placeholder="City" required />
      <input name="state" onChange={handleChange} placeholder="State" required />
      <input name="country" onChange={handleChange} placeholder="Country" required />
      <input name="zipCode" onChange={handleChange} placeholder="Zip Code" required />
      <input name="passportNumber" onChange={handleChange} placeholder="Passport Number" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button id="submit-button" type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};