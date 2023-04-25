import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </>
  );
};

export default Register;
