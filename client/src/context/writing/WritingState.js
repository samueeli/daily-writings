import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WritingContext from './writingContext';
import writingReducer from './writingReducer';
import {
  ADD_WRITING,
  DELETE_WRITING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WRITING,
} from '../types';

const WritingState = (props) => {
  const initialState = {
    writings: [
      {
        id: 1,
        title: 'title1',
        text: 'text1',
      },
      {
        id: 2,
        title: 'title2',
        text: 'text2',
      },
      {
        id: 3,
        title: 'title3',
        text: 'text3',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(writingReducer, initialState);

  // add writing
  const addWriting = (writing) => {
    writing.id = uuidv4();
    dispatch({ type: ADD_WRITING, payload: writing });
  };

  // delete writing
  const deleteWriting = (id) => {
    dispatch({ type: DELETE_WRITING, payload: id });
  };

  // set current writing
  const setCurrent = (writing) => {
    dispatch({ type: SET_CURRENT, payload: writing });
  };

  // clear current writing
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update writing
  const updateWriting = (writing) => {
    dispatch({ type: UPDATE_WRITING, payload: writing });
  };

  return (
    <WritingContext.Provider
      value={{
        writings: state.writings,
        current: state.current,
        addWriting,
        deleteWriting,
        setCurrent,
        clearCurrent,
        updateWriting,
      }}
    >
      {props.children}
    </WritingContext.Provider>
  );
};

export default WritingState;
