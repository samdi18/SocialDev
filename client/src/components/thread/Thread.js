import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getThread } from '../../actions/thread';

// Component imports
import ThreadItem from '../threads/ThreadItem';
import CommentForm from '../thread/CommentForm';
import CommentItem from '../thread/CommentItem';

const Thread = ({ thread: { thread, loading }, match, getThread }) => {
  useEffect(() => {
    getThread(match.params.id);
  }, [getThread, match.params.id, thread.comments]);

  const { comments } = thread;

  return loading || thread === null ? (
    <Spinner />
  ) : (
    <div className='wrapper thread-wrapper'>
      <div className='thread-block'>
        <ThreadItem thread={thread} />
        <CommentForm thread={thread} threadId={thread._id} />
        {console.log('COMMENT', comments)}
        {comments && comments.length > 0 && (
          <div className='comments'>
            {comments &&
              comments.map((comment) => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  threadId={thread._id}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

Thread.propTypes = {
  getThread: PropTypes.func.isRequired,
  thread: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  thread: state.thread,
});

export default connect(mapStatetoProps, { getThread })(Thread);
