import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/thread';

const CommentItem = ({
  comment: { _id, text, user, date },
  auth,
  threadId,
  deleteComment,
}) => (
  <div className='comment-item'>
    <div>
      <h4 className='comment-user'>{user.name}</h4>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <p className=''>{text}</p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(threadId, _id)}
          type='button'
          className='btn'
        >
          Delete
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  threadId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
