import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/thread';

const CommentForm = ({ threadId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className='comment-block'>
      <h3>Leave a Comment</h3>
      <form
        className='comment-form'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(threadId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Start typing your comment here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type='submit' className='' value='Comment' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
