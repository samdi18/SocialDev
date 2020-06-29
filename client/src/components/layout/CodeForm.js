import React, { useState } from 'react';

const CodeForm = ({ setFlag }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'to infinity and beyond') {
      setFlag(true);
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  return (
    <section>
      <div className='visual-buttons'>
        <div className='round-btn round-1'></div>
        <div className='round-btn round-2'></div>
        <div className=' round-btn exit'>
          <img
            src={require('../../images/cross.svg')}
            alt=''
            className='cross-img'
          />
        </div>
      </div>

      {/* In line style test */}
      <p className='code'>
        <span style={{ color: '#AEA9DE' }}>function </span>
        <span style={{ color: '#CDE871' }}>
          welcome<span>()</span>
        </span>
        <span>{' {'}</span>
        <p style={({ color: '#958BF1' }, { marginLeft: '20px' })}>
          let
          <span style={{ color: 'white' }}> initial =</span>{' '}
          <span style={{ color: '#CDE871' }}> 10;</span>
        </p>
        <p style={({ color: '#AEA9DE' }, { marginLeft: '20px' })}>
          return
          <span style={{ color: '#958BF1' }}>
            ` <span style={{ color: '#F4FFCC' }}>To</span>
            <span>
              ${' '}
              <span style={{ color: 'white' }}>
                {' '}
                {'{initial'} / 0 {'} '}
              </span>
              <span style={{ color: '#F4FFCC' }}>and Beyond</span>
            </span>
            `<span style={{ color: '#F4FFCC' }}>;</span>
            <p style={{ marginLeft: '-20px' }}>{' }'}</p>
          </span>
        </p>
      </p>

      <form className='code-box' onSubmit={handleSubmit}>
        <input
          type='text'
          name='answer'
          value={answer}
          onChange={handleChange}
        />
        <button className='submit-btn'>
          <img
            src={require('../../images/arrow.svg')}
            alt=''
            className='arrow-img'
          />
        </button>
      </form>
    </section>
  );
};

export default CodeForm;
