import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

// Stateless component that renders a web form to collect the necessary appointment information
export const AppointmentForm = ({
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          placeholder="Appointment Name (Firstname Lastname)"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="date"
          value={date}
          min={getTodayString()}
          required 
          onChange={(e) => setDate(e.target.value)}
        />

        <input 
          type="time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
        />

        <ContactPicker 
          contact={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="submit"
          value="Add Data To Appointments"
        />
      </form>
    </>
  );
};
