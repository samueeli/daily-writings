import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import WritingContext from './writingContext';
import writingReducer from './writingReducer';
import {
  GET_WRITINGS,
  ADD_WRITING,
  DELETE_WRITING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WRITING,
  CLEAR_WRITINGS,
  WRITING_ERROR,
} from '../types';

// Create a custom hook to use the writing context

export const useWritings = () => {
  const { state, dispatch } = useContext(WritingContext);
  return [state, dispatch];
};

// Action creators

// Get Writings
export const getWritings = async (dispatch) => {
  try {
    const res = await axios.get('/api/writings');

    dispatch({
      type: GET_WRITINGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WRITING_ERROR,
      payload: err.response.msg,
    });
  }
};

// Add Writing
export const addWriting = async (dispatch, writing) => {
  try {
    const res = await axios.post('/api/writings', writing);

    dispatch({
      type: ADD_WRITING,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WRITING_ERROR,
      payload: err.response.msg,
    });
  }
};

// Delete Writing
export const deleteWriting = async (dispatch, id) => {
  try {
    await axios.delete(`/api/writings/${id}`);

    dispatch({
      type: DELETE_WRITING,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: WRITING_ERROR,
      payload: err.response.msg,
    });
  }
};

// Update Writing
export const updateWriting = async (dispatch, writing) => {
  try {
    const res = await axios.put(`/api/writings/${writing._id}`, writing);

    dispatch({
      type: UPDATE_WRITING,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WRITING_ERROR,
      payload: err.response.msg,
    });
  }
};

// Clear Writings
export const clearWritings = (dispatch) => {
  dispatch({ type: CLEAR_WRITINGS });
};

// Set Current Writing
export const setCurrent = (dispatch, writing) => {
  console.log('samulin state writing', writing);
  console.log('samulin state dispatch', dispatch);
  dispatch({ type: SET_CURRENT, payload: writing });
};

// Clear Current Writing
export const clearCurrent = (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

const WritingState = (props) => {
  const initialState = {
    writings: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(writingReducer, initialState);

  return (
    <WritingContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </WritingContext.Provider>
  );
};

export default WritingState;
