import React from 'react';
import { ListOfContact, Container } from './ContactsList.styled';
import ContactListItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactsList = () => {
  const contactsToRender = useSelector(selectFilteredContacts)

  return (
    <Container>
      <h2>My contacts</h2>
      <ListOfContact>
        {contactsToRender.map(({ name, number, id }) => (
          <ContactListItem name={name} number={number} id={id} key={id} />
        ))}
      </ListOfContact>
    </Container>
  );
};


export default ContactsList;
