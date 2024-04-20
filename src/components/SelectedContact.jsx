import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
        console.log("Contact:", data); 
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    if (selectedContactId) {
      fetchContact(); 
    }
  }, [selectedContactId]); 

  if (!selectedContactId) {
    return <p>No contact selected.</p>;
  }

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default SelectedContact;
