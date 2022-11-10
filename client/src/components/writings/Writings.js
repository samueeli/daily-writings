import { useContext } from 'react';
import WritingContext from '../../context/writing/writingContext';
import { WritingItem } from './WritingItem';

const Writings = () => {
  const writingContext = useContext(WritingContext);

  const { writings } = writingContext;

  // title={writing.title} text={writing.text}
  return (
    <>
      <h2>Your Writings</h2>
      {writings.map((writing) => (
        <WritingItem
          id={writing.id}
          key={writing.id}
          title={writing.title}
          text={writing.text}
        />
      ))}
    </>
  );
};

export default Writings;
