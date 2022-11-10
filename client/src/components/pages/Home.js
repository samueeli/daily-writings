import React from 'react';
import Writings from '../writings/Writings';
import { CreateWriting } from '../writings/CreateWriting';

const Home = () => {
  return (
    <div>
      <div>{/* writingForm */}</div>
      <div>
        <CreateWriting />
        <hr style={{ margin: '2rem 0' }} />
        <Writings />
      </div>
    </div>
  );
};

export default Home;
