import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    {/* <img
      src={require('../../images/spinner.gif')}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    /> */}
    <lottie-player
      autoplay
      loop
      mode='normal'
      src='https://assets2.lottiefiles.com/datafiles/ZICy8bQUwSZNxZv/data.json'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    ></lottie-player>
  </Fragment>
);
