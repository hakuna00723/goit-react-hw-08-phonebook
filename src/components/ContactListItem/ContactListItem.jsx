import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ListElem, Text, Button } from './ContactListItem.styled';

const ElementContact = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();
  const handleDelete = eId => dispatch(deleteContact(eId));
  return (
    <ListElem>
      <Text>{contactName}</Text>
      <Text>{contactNumber}</Text>

      <Button type="button" onClick={() => handleDelete(contactId)}>
        Delete
      </Button>
    </ListElem>
  );
};

ElementContact.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ElementContact;
