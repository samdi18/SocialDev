import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <img
      src={require('../../images/spinner.gif')}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
