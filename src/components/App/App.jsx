import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const id = nanoid(4);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already to contacts`);
      return;
    }

    setContacts([...contacts, { id: id, name, number }]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <FormAddContacts onSubmit={addContact} />

      <h2 className={css.title}>Contacts</h2>
      <FilterContacts value={filter} onChange={changeFilter} />
      <ContactsList
        onDeleteContact={deleteContact}
        contacts={getVisibleContacts()}
      />
    </div>
  );
}
