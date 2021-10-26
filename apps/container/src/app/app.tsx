import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from './logo.svg';
import Navbar from './navbar/navbar';
import star from './star.svg';

// @ts-ignore
const RemoteButton = React.lazy(() => import('app2/Button'));

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
`;

export function App() {
  return (
    <StyledApp>
      <h1>I am container</h1>
      <React.Suspense fallback="Loading Projects">
        <RemoteButton params={[1, 2, 3]} />
      </React.Suspense>
    </StyledApp>
  );
}

export default App;
