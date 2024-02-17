import React from "react";

// Stateless component that renders a drop-down list of all contact names
export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value="">
          No Contact Selected
        </option>
        {
          contacts.map((contact) => {
            return (
              <option>
                {contact.name}
              </option>
            );
          })
        }
      </select>
    </>
  );
};
