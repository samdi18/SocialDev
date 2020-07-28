import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addThread } from '../../actions/thread';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor from '@ckeditor/ckeditor5-react';

const ThreadForm = ({ addThread }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addThread({ title, text });
    setText('');
    setTitle('');
  };

  return (
    <div className='thread-form wrapper thread-wrapper'>
      <div className='card'>
        <div className='form-header'>
          <h3>Create New Thread</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            value={title}
            className='post-title'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            name='text'
            value={text}
            cols='30'
            rows='5'
            placeholder='Start typing..'
            className='post-input'
            onChange={(e) => setText(e.target.value)}
            required
          />

          <div className='char-count'>
            <small>{text.trim().length} characters</small>
          </div>

          <div className='thread-submit'>
            <input type='submit' className='btn' value='Post' />
          </div>
        </form>
      </div>
    </div>
  );
};

ThreadForm.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default connect(null, { addThread })(ThreadForm);
