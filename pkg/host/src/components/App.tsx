import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ErrorBoundary } from './ErrorBoundary';

// @ts-ignore
// const Header = React.lazy(() => import('my-nav/Header'));

import '../index.css';

const App = () => {
  console.log('App');
  return (
    <div>
      <ErrorBoundary>
        <div style={{ fontSize: 50 }}>Host</div>
        <React.Suspense fallback={<div />}>{/* <Header /> */}</React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

/**
 * Insert into DOM
 */
ReactDOM.render(<App />, document.getElementById('root'));
