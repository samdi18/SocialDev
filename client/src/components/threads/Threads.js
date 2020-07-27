import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThreadItem from './ThreadItem';
import ThreadForm from './ThreadForm';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { getThreads } from '../../actions/thread';

const Threads = ({ getThreads, thread: { threads, loading } }) => {
  useEffect(() => {
    getThreads();
  }, [getThreads]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='thread wrapper thread-wrapper'>
      <div className='thread-items'>
        <div className='create-post'>
          <Link to='/create-thread' className='thread-btn'>
            Create Post
          </Link>
        </div>

        <div className='thread-card'>
          <ul>
            {threads.map((thread) => (
              <ThreadItem key={thread._id} thread={thread} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Threads.prototype = {
  getThreads: PropTypes.func.isRequired,
  thread: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  thread: state.thread,
});

export default connect(mapStateToProps, { getThreads })(Threads);
