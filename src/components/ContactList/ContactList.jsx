import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import { fetchAllContacts, fetchDeleteContact } from 'redux/operations';

export const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <List>
      {contactsList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
          delContact={id}
        />
      ))}
    </List>
  );
};
