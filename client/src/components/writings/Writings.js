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
            <WritingItem
              id={writing._id}
              key={writing._id}
              title={writing.title}
              text={writing.text}
            />
          ))}
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default Writings;
