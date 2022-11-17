import {
  GET_WRITINGS,
  ADD_WRITING,
  DELETE_WRITING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WRITING,
  WRITING_ERROR,
  CLEAR_WRITINGS,
} from '../types';

const writingReducer = (state, action) => {
  switch (action.type) {
    case GET_WRITINGS:
      return {
        ...state,
        writings: action.payload,
      };
    case ADD_WRITING:
      return {
        ...state,
        writings: [action.payload, ...state.writings],
      };
    case UPDATE_WRITING:
      return {
        ...state,
        writings: state.writings.map((writing) =>
          writing._id === action.payload._id ? action.payload : writing
        ),
      };
    case DELETE_WRITING:
      return {
        ...state,
        writings: state.writings.filter(
          (writing) => writing._id !== action.payload
        ),
      };
    case CLEAR_WRITINGS:
      return {
        ...state,
        writings: null,
        error: null,
        current: null,
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
    case WRITING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};

export default writingReducer;
