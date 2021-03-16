import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

class App extends Component {
  constructor(props) {
    super(props)

    this.findPalette = this.findPalette.bind(this)
  }

  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id
    })
  }

  render() {
    return (
    
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => <PaletteList palettes={seedColors} />} 
        />
        <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps) => (
            <Palette 
              palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
            />
          )}
        />
      </Switch>
  
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
