import React from "react";

const NewProfile = () => {
  return (
    <div>
      <h1>Complete your Profile</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter your full name..."
        id=""
      />
      <input
        type="text"
        name="contact_no"
        placeholder="Enter your phone number..."
        id=""
      />
      <input
        type="text"
        name="email"
        placeholder="Enter your email id..."
        id=""
      />
      <textarea
        name="address"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter your Address"
      />
      <select name="state" id="">
        <option value="">State</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Delhi">Delhi</option>
      </select>
      <select name="city" id="">
        <option value=""></option>
        <option value="Mumbai">Mumbai</option>
        <option value="Thane">Thane</option>
      </select>
      <select name="bloodType" id="">
        <option value=""></option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
        <option value="B+">B+</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
  );
};

export default NewProfile;
