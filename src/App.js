import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

const App = () => {
  return (
    
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route exact path="/palette/:id" />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
