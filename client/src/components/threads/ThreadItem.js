import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deleteThread } from '../../actions/thread';
import { withRouter } from 'react-router-dom';

import CommentItem from '../thread/CommentItem';

const ThreadItem = ({
  auth,
  addLike,
  removeLike,
  deleteThread,
  thread: { _id, title, text, email, name, user, likes, comments, date },
  history,
}) => {
  const handleClick = () => {
    addLike(_id);
  };
  const handleDelete = () => {
    deleteThread(_id);
    history.push('/threads');
    console.log('delete thread');
  };
  return (
    <div className='single-thread'>
      <li>
        <div className='thread-info'>
          <div className='thread-header'>
            <small>
              Posted On <Moment format='YYYY/MM/DD'>{date}</Moment> by -{' '}
              {email && email.split('@')[0]}
            </small>
            {!auth.loading && user === auth.user._id && (
              <img
                src={require('../../images/rubbish.svg')}
                alt=''
                className='icon-small'
                onClick={handleDelete}
              />
            )}
          </div>
          <div className='thread-content'>
            <div className='title'>
              <h3>{title}</h3>
            </div>
            <p>{text}</p>
          </div>

          <div className='thread-bottom'>
            <div className='like'>
              <img
                src={require('../../images/like.svg')}
                alt=''
                className='like-img'
                onClick={handleClick}
              />{' '}
              <small>{likes && likes.length > 0 && likes.length} likes</small>
            </div>

            <div className='comment'>
              <Link to={`/threads/${_id}`}>
                <img
                  src={require('../../images/comment.svg')}
                  alt=''
                  className='comment-img'
                />{' '}
                {comments && comments.length > 0 && (
                  <small>{comments.length} comments</small>
                )}
              </Link>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

ThreadItem.propTypes = {
  thread: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deleteThread })(
  withRouter(ThreadItem)
);
