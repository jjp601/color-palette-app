import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalatte from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#394bad",
        // backgroundImage: `url(${bg})`,
        overflow: "scroll"
      },
      heading: {
        fontSize: "2rem"
      },
      container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        // [sizes.down("xl")]: {
        //   width: "80%"
        // },
        // [sizes.down("xs")]: {
        //   width: "75%"
        // }
      },
      nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
          color: "white"
        }
      },
      palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        // [sizes.down("md")]: {
        //   gridTemplateColumns: "repeat(2, 50%)"
        // },
        // [sizes.down("xs")]: {
        //   gridTemplateColumns: "repeat(1, 100%)",
        //   gridGap: "1.4rem"
        // }
      }
}

class PaletteList extends Component {


    goToPalette(id) {
      this.props.history.push(`/palette/${id}`)
    }

    render() {
      const { palettes, classes } = this.props;
      return (
          <div className={classes.root}>
              <div className={classes.container}>
                  <nav className={classes.nav}>
                      <h1>Color Palette</h1>
                  </nav>
                  <div className={classes.palettes}>
                      {palettes.map((palette) => (
                          <MiniPalatte {...palette} handleClick={() => this.goToPalette(palette.id)} />
                      ))}
                  </div>
                  
              </div>
          </div>
      );
    }
}

export default withStyles(styles)(PaletteList);