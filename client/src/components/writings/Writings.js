import { useEffect } from 'react';
import { WritingItem } from './WritingItem';
import { useWritings, getWritings } from '../../context/writing/WritingState';

const Writings = () => {
  const [writingState, writingDispatch] = useWritings();

  const { writings } = writingState;

  useEffect(() => {
    getWritings(writingDispatch);
  }, [writingDispatch]);

  if (writings !== null && writings.length === 0) {
    return <p>No writings were found</p>;
  }

  return (
    <>
      <h2>Your Writings</h2>
      {writings !== null ? (
        <>
          {writings.map((writing) => (
            <WritingItem writing={writing} key={writing._id} />
          ))}
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default Writings;
