import { Helmet } from 'react-helmet';
import ContactsBar from 'components/ContactsBar';
import { useAuth } from 'hooks';

const Contacts = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      {isLoading}
      <ContactsBar />
    </>
  );
};

export default Contacts;
