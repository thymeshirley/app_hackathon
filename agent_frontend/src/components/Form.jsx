import React, { useState } from "react";
import { airlineService } from "./airlineService";

export const Form = () => {
  const [user, setUser] = useState({
    fullName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    passportNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await airlineService.createUser(user);
    airlineService.handleResponse(response);
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="flex flex-wrap w-full max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 w-full">
        Registration Form
      </h2>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <input
          name="fullName"
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="gender"
          onChange={handleChange}
          placeholder="Gender"
          required
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="phoneNumber"
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <textarea
          name="address"
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full mt-4 p-2 h-20 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <input
          name="city"
          onChange={handleChange}
          placeholder="City"
          required
          className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="state"
          onChange={handleChange}
          placeholder="State"
          required
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="country"
          onChange={handleChange}
          placeholder="Country"
          required
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="zipCode"
          onChange={handleChange}
          placeholder="Zip Code"
          required
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="passportNumber"
          onChange={handleChange}
          placeholder="Passport Number"
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full mt-4 p-2 border border-gray-200 rounded outline-none focus:border-blue-500"
        />
      </div>
      <button
        id="submit-button"
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};
