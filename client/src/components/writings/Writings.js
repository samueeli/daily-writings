import { useContext, useEffect } from 'react';
import WritingContext from '../../context/writing/writingContext';
import { WritingItem } from './WritingItem';

const Writings = () => {
  const writingContext = useContext(WritingContext);

  const { writings, getWritings } = writingContext;

  useEffect(() => {
    getWritings();
    //eslint-disable-next-line
  }, []);

  if (writings === null || writings.length === 0) {
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
