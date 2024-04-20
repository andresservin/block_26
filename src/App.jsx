import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
};

export default App;
