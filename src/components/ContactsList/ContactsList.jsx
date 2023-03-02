import { ListOfContact, Container } from './ContactsList.styled';
import ContactListItem from './ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredContacts } from 'redux/selectors';
import {fetchContacts} from '../../redux/operation'

const ContactsList = () => {
  const filterContact = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])

  return (
    <Container>
      <h2>My contacts</h2>
      <ListOfContact>
        {filterContact.map(({ name, number, id }) => (
          <ContactListItem name={name} number={number} id={id} key={id} />
        ))}
      </ListOfContact>
    </Container>
  );
};

export default ContactsList;