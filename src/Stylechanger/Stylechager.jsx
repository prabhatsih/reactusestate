import React, { useState } from 'react';

function Stylechager() {

    const stylechange = {
        title : "CNC WEB WORLD",
        css : {
            color : "red",
            fontSize : "10px",
            border: "2px solid blue"
        }
    }

    const [fontStyle, setFontStyle] = useState(stylechange);

    function newStyle(){
        setFontStyle({
            title : "CNC Web World by Prashant Sir",
            css : {
                color : "Blue",
                fontSize : "20px",
                border: "4px dotted yellow"
            }
        })
    }
    

  return (
    <div>
      <h3 style={{textAlign:'center'}}>Style Changer</h3>
        <h2 style={fontStyle.css}>{fontStyle.title}</h2>
        <button onClick={newStyle}>Click Me</button>
    </div>
  )
}

export default Stylechager
