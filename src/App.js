import React from 'react';
import Palette from './components/Palette';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

const App = () => {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
