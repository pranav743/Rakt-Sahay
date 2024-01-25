import React from "react";
import { useState } from "react";

import { bloodgroup, places } from "./data";

const NewProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const details = {
    name: name,
    email: email,
    contact_no: number,
    address: address,
    state: state,
    city: city,
    bloodType: bloodGroup,
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl p-2 font-bold text-center text-[#EA3A60]">
        Complete your Profile
      </h1>
      <input
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded-xl border-solid border-[#EA3A60] border-b-2 text-xl w-3/4 max-w-md"
        type="text"
        name="name"
        placeholder="Enter your full name..."
        id=""
        value={details.name}
      />
      <input
        onChange={(e) => setNumber(e.target.value)}
        className="p-3 rounded-xl border-solid border-[#EA3A60] border-b-2 text-xl w-3/4 max-w-md"
        type="text"
        name="contact_no"
        placeholder="Enter your phone number..."
        id=""
        value={details.number}
      />
      <input
        onChange={() => setEmail()}
        className="p-3 rounded-xl border-solid border-[#EA3A60] border-b-2 text-xl w-3/4 max-w-md"
        type="text"
        name="email"
        placeholder="Enter your email id..."
        id=""
        value={details.email}
      />
      <textarea
        onChange={(e) => setAddress(e.target.value)}
        className="p-3 rounded-xl border-b-2 border-solid border-[#EA3A60] outline-none text-xl w-3/4 max-w-md"
        name="address"
        id=""
        cols="30"
        rows="3"
        placeholder="Enter your Address"
        value={details.address}
      />
      <div className="location flex justify-around gap-2">
        <select
          onChange={(e) => setState(e.target.value)}
          className="p-3 rounded-xl border-b-2 border-solid border-[#EA3A60] outline-none text-xl w-3/4 max-w-md"
          name="state"
          id=""
        >
          <option value="">State</option>
          {places.map((place, index) => (
            <option key={index} value={place.state}>
              {place.state}
            </option>
          ))}
        </select>

        <select
          className="p-3 rounded-xl border-b-2 border-solid border-[#EA3A60] outline-none text-xl w-3/4 max-w-md"
          name="city"
          id=""
        >
          <option value="">City</option>
          {state !== "" &&
            places
              .find((entry) => entry.state === state)
              .cities.map((city, index) => {
                return (
                  <option key={index} value={city}>
                    {city}
                  </option>
                );
              })}
        </select>
      </div>
      <select
        className="p-3 rounded-xl border-b-2 border-solid border-[#EA3A60] outline-none text-xl w-3/4 max-w-md"
        name="bloodType"
        id=""
      >
        <option value="">Blood Group</option>
        {bloodgroup.map((group, index) => {
          return <option value={group}>{group}</option>;
        })}
      </select>
      <button className="p-4 rounded-xl mt-8 w-full max-w-md bg-[#EA3A60] text-white text-xl font-bold">
        Submit
      </button>
    </div>
  );
};

export default NewProfile;
