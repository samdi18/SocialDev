import React from 'react';

const Home = () => {
  return (
    <div>
      <main>
        <p>Collaborate.</p>
        <p>Share.</p>
        <p>Learn.</p>

        <img
          src={require('../../images/main.svg')}
          alt=''
          className='main-img'
        />
      </main>

      <section></section>
    </div>
  );
};

export default Home;
