import React from 'react';
import { withLayout } from './components/Layout/Layout';

function App(): JSX.Element {
  return (
    <section>
      <div className='container'>
        <h1>Home Page</h1>
      </div>
    </section>
  );
}

export default withLayout(App);
