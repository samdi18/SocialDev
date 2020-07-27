import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/thread';

const CommentForm = ({ threadId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className=''>
      <div className=''>
        <h3>Leave a Comment</h3>
      </div>
      <form
        className=''
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
          placeholder='Comment the post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type='submit' className='' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
