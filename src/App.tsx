import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='App'></div>
    </ChakraProvider>
  );
}

export default App;
