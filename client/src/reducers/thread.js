import {
  GET_THREAD,
  GET_THREADS,
  THREAD_ERROR,
  UPDATE_LIKES,
  DELETE_THREAD,
  ADD_THREAD,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types';

const initialState = {
  threads: [],
  thread: {},
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_THREADS:
      return {
        ...state,
        threads: payload,
        loading: false,
      };

    case GET_THREAD:
      return {
        ...state,
        thread: payload,
        loading: false,
      };
    case ADD_THREAD:
      return {
        ...state,
        threads: [payload, ...state.threads],
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        thread: {
          ...state.thread,
          comments: { ...state.thread, comments: payload },
        },
        loading: false,
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        thread: {
          ...state.thread,
          comments: state.thread.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        threads: state.threads.map((thread) =>
          thread._id === payload.id
            ? { ...thread, likes: payload.likes }
            : thread
        ),
        loading: false,
      };

    case DELETE_THREAD:
      return {
        ...state,
        threads: state.threads.filter((thread) => thread._id !== payload),
        loading: false,
      };

    case THREAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
