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
    case UPDATE_WRITING:
      return {
        ...state,
        writings: state.writings.map((writing) =>
          writing.id === action.payload.id ? action.payload : writing
        ),
      };
    case DELETE_WRITING:
      return {
        ...state,
        writings: state.writings.filter(
          (writing) => writing.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

export default writingReducer;
