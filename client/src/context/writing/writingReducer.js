import {
  ADD_WRITING,
  DELETE_WRITING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WRITING,
} from '../types';

const writingReducer = (state, action) => {
  switch (action.type) {
    case ADD_WRITING:
      return {
        ...state,
        writings: [action.payload, ...state.writings],
      };
    case DELETE_WRITING:
      return {
        ...state,
        writings: state.writings.filter(
          (writing) => writing.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default writingReducer;
