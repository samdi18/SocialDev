import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_THREADS,
  THREAD_ERROR,
  UPDATE_LIKES,
  DELETE_THREAD,
  ADD_THREAD,
  GET_THREAD,
} from './types';

// Get THREADs
export const getThreads = () => async (dispatch) => {
  try {
    const res = await axios.get('api/threads');

    dispatch({
      type: GET_THREADS,
      payload: res.data,
    });

    console.log(res.data);
  } catch (err) {
    dispatch({
      type: THREAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like by passing in the post id
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/threads/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: THREAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/threads/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: THREAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete thread
export const deleteThread = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/threads/${id}`);

    dispatch({
      type: DELETE_THREAD,
      payload: id,
    });

    dispatch(setAlert('Post has been Removed', 'success'));
  } catch (err) {
    dispatch({
      type: THREAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add thread
export const addThread = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/threads', formData, config);

    dispatch({
      type: ADD_THREAD,
      payload: res.data,
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: THREAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get THREAD
export const getThread = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/threads/${id}`);

    dispatch({
      type: GET_THREAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: THREAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
