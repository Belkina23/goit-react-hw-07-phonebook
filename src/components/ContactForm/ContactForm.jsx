import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from '../../redux/operation';
import { selectContacts } from 'redux/selectors';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handelSubmit = e => {
    e.preventDefault();

    const { name, phone } = e.target;

    if (contacts.find(contact => contact.name === name.value)) {
      return toast.error(`Sorry, ${name} is already in contacts.`);
    }

    if (contacts.find(contact => contact.phone === phone.value)) {
      return toast.error(
        `Sorry, phone number: ${phone} is already in contacts.`
      );
    }
    const newContact = {
      name: name.value,
      phone: phone,
    };
    dispatch(addContact(newContact));

    e.target.reset();

  };

  return (
    <Form onSubmit={handelSubmit}>
      <label>
        <span>Name</span>
      </label>
      <Input
        autoComplete="off"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label>
        <span>Number</span>
      </label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <label>
        <Button type="submit">Add contact</Button>
      </label>
    </Form>
  );
};

export default ContactForm;
