import React, { useContext, useEffect } from 'react';
import Writings from '../writings/Writings';
import { CreateWriting } from '../writings/CreateWriting';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        <CreateWriting />
        <hr style={{ margin: '2rem 0' }} />
        <Writings />
      </div>
    </div>
  );
};

export default Home;
