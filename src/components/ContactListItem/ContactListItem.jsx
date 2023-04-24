import PropTypes from 'prop-types';
import { DeleteBtn, Item, Info } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDelete, delContact }) => {
  return (
    <Item>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <DeleteBtn onClick={() => onDelete(delContact)}>Delete</DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  delContact: PropTypes.string.isRequired,
};
