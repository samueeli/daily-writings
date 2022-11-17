import { useReducer } from 'react';
import axios from 'axios';
import WritingContext from './writingContext';
import writingReducer from './writingReducer';
import {
  GET_WRITINGS,
  CLEAR_WRITINGS,
  ADD_WRITING,
  DELETE_WRITING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WRITING,
  WRITING_ERROR,
} from '../types';

const WritingState = (props) => {
  const initialState = {
    writings: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(writingReducer, initialState);

  // get writings
  const getWritings = async () => {
    try {
      const res = await axios.get('/api/writings');
      dispatch({
        type: GET_WRITINGS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WRITING_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // add writing
  const addWriting = async (writing) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/writings', writing, config);
      dispatch({
        type: ADD_WRITING,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WRITING_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // delete writing
  const deleteWriting = (id) => {
    dispatch({ type: DELETE_WRITING, payload: id });
  };

  // clear writings
  const clearWritings = () => {
    dispatch({ type: CLEAR_WRITINGS });
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
        error: state.error,
        addWriting,
        deleteWriting,
        setCurrent,
        clearCurrent,
        updateWriting,
        getWritings,
        clearWritings,
      }}
    >
      {props.children}
    </WritingContext.Provider>
  );
};

export default WritingState;
