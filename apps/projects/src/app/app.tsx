import styled from 'styled-components';
import Button from './Button';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <h1>Child</h1>
      <Button />
    </StyledApp>
  );
}

export default App;
