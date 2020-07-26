import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ThreadItem from '../threads/ThreadItem';
import CommentForm from '../thread/CommentForm';
import CommentItem from '../thread/CommentItem';
import { getThread } from '../../actions/thread';

const Thread = (props) => {
  return <div>Post</div>;
};

Thread.propTypes = {
  getThread: PropTypes.func.isRequired,
  thread: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  thread: state.thread,
});

export default connect(mapStatetoProps, { getThread })(Thread);
