import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import FormContact from 'components/ContactForm';
import ListContact from 'components/ContactList';
import SearchFilter from 'components/Filter';
import { Message, Title, Wrapper, Text } from './ContactsBar.styled';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';

const ContactsBar = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = (numberContact, nameContact) => {
    return alert(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  };

  const checkСontact = newNumber => {
    return allContacts.some(contact => contact.number === newNumber);
  };

  const onSubmit = (name, number) => {
    if (checkСontact(number)) {
      return notifiesAlert(number, name);
    }

    dispatch(addContact({ name, number }));
  };

  return (
    <Wrapper isHeight={allContacts.length > 0}>
      <Title>Phonebook</Title>
      <FormContact onSubmit={onSubmit} />

      <Text>Contacts</Text>

      {!error && isLoading}

      {!error && !isLoading && allContacts.length === 0 ? (
        <Message>Ooops... There are no contacts🙁</Message>
      ) : (
        <>
          <SearchFilter />
          <ListContact />
        </>
      )}
    </Wrapper>
  );
};

export default ContactsBar;
