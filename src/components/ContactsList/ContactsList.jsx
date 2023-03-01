import { ListOfContact, Container } from './ContactsList.styled';
import { PropTypes } from 'prop-types';
import ContactListItem from './ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import {fetchContacts} from '../../redux/operation'

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch])

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsToRender = getFilteredContacts();
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
