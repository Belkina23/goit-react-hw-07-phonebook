import { AppStyled } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';

const App = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (

    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      {isLoading && !error && `...Loading`}
      <ContactsList />
    </AppStyled>

  );
};

export default App;
