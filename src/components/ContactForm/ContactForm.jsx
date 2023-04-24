import { Formik, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { FormStylized, FieldStylized, AddContBtn } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { fetchAddContact } from 'redux/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('⚠️Please enter name.'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('⚠️Please enter number.'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (checkedContact) {
      alert(`a contact ${values.name} already exists`);
      return;
    }

    dispatch(fetchAddContact(values));
    resetForm({
      name: '',
      number: '',
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStylized autoComplete="off">
        <label htmlFor="name">
          Name
          <FieldStylized type="text" name="name"></FieldStylized>
          <ErrorMessage name="name" />
        </label>
        <label htmlFor="name">
          Number
          <FieldStylized type="tel" name="number"></FieldStylized>
          <ErrorMessage name="number" />
        </label>
        <AddContBtn type="submit">Add Contact</AddContBtn>
      </FormStylized>
    </Formik>
  );
};
