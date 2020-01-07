import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';

import Loader from './Loader';
import Routes from 'Routes';

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </HashRouter>
  );
};

// export default App;
export default React.memo(App);
