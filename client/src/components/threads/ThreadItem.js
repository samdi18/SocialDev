import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deleteThread } from '../../actions/thread';

const ThreadItem = ({
  auth,
  addLike,
  removeLike,
  deleteThread,
  thread: { _id, title, text, email, name, user, likes, comments, date },
}) => {
  const handleClick = () => {
    addLike(_id);
  };
  return (
    <>
      <li>
        <div className='thread-info'>
          <div className='thread-header'>
            <small>
              Posted On <Moment format='YYYY/MM/DD'>{date}</Moment> by - {name}
            </small>
            {!auth.loading && user === auth.user._id && (
              <img
                src={require('../../images/rubbish.svg')}
                alt=''
                className='icon'
                onClick={() => {
                  deleteThread(_id);
                  console.log('delete thread');
                }}
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
              <small>{likes.length > 0 && likes.length} likes</small>
            </div>

            <div className='comment'>
              <Link to={`/threads/${_id}`}>
                <img
                  src={require('../../images/comment.svg')}
                  alt=''
                  className='comment-img'
                />{' '}
                {comments.length > 0 && (
                  <small>{comments.length} comments</small>
                )}
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
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
  ThreadItem
);
