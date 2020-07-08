import React, { useState } from 'react';
import CodeForm from './CodeForm';
import Animation from './Animation';
import Register from '../auth/Register';

const Auth = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className='home-flex'>
      {/* <main>
        <div className="content">
          <p>Collaborate.</p>
          <p>Share.</p>
          <p>Learn.</p>
        </div>

        <img
          src={require("../../images/main.svg")}
          alt=""
          className="main-img"
        />
      </main> */}
      <Animation />

      {flag ? <Register /> : <CodeForm setFlag={setFlag} />}
    </div>
  );
};

export default Auth;
