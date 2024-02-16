import React from "react";

export const ContactForm = ({name, setName, phone, setPhone, email, setEmail, handleSubmit}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} placeholder="Contact Name (Firstname Lastname)" required onChange={(e) => setName(e.target.value)}></input>
        <input type='tel' value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Contact Phone (xxx-xxx-xxxx)" required onChange={(e) => setPhone(e.target.value)}></input>
        <input type='email' value={email} placeholder="Contact Email (user@gmail.com)" required onChange={(e) => setEmail(e.target.value)}></input>
        <input type="submit" value="Add Data To Contacts"></input>
      </form>
    </>
  );
};

