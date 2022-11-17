import {
  ADD_WRITING,
  DELETE_WRITING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_WRITING,
  WRITING_ERROR,
  GET_WRITINGS,
  CLEAR_WRITINGS,
} from '../types';

const writingReducer = (state, action) => {
  switch (action.type) {
    case GET_WRITINGS:
      return {
        ...state,
        writings: action.payload,
        loading: false,
      };
    case ADD_WRITING:
      return {
        ...state,
        writings: [action.payload, ...state.writings],
        loading: false,
      };
    case UPDATE_WRITING:
      return {
        ...state,
        writings: state.writings.map((writing) =>
          writing.id === action.payload.id ? action.payload : writing
        ),
        loading: false,
      };
    case DELETE_WRITING:
      return {
        ...state,
        writings: state.writings.filter(
          (writing) => writing.id !== action.payload
        ),
        loading: false,
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
      return state;
  }
};

export default writingReducer;
