import React from 'react';

const PaletteFooter = (props) => (

    <footer className="Palette-footer">
        {props.paletteName}
        <span className="emoji">{props.emoji}</span>
    </footer>
    
)

export default PaletteFooter;