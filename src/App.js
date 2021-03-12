import React from 'react';
import Palette from './components/Palette';
import seedColors from './utils/seedColors';

const App = () => {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
