import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

/* TODO / Feature Request: we need to keep track of how many times this button has 
been clicked. It's completely up to you how you want to display it, but let's use 
react hooks to keep track of the count. 

It would be a bonus if we could take advantage of the browser's local storage api
to store the value so that the count didn't reset every time we refresh the page
*/

function App() {
  return (
    <div>
      <Body>
        <Logo>Sphere</Logo>
        <Button />
      </Body>
    </div>
  );
}

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Body = styled.div`
  align-items: center;
  background-color: #02208F;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

const Logo = styled.h1`
  animation: ${Rotate} infinite 30s linear;
  height: 40vmin;
  pointer-events: none;
  user-select: none;
`;

const Button = styled.div`
  background: #d7b90b;
  border: 5px solid red;
  border-radius: 80px;
  cursor: pointer;
  height: 80px;
  width: 80px;
  position: absolute;
  margin: auto;
  transition: transform 100ms ease;

  &:active {
    transform: scale(0.8);
  }
`;

export default App;
