import { Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import 'fontsource-roboto';
import React from "react";
import "./App.css";


function App() {
  console.log('App')
  let toggle = true;

  const handleChange = (event) => {
    console.log(event.target.checked);
    // все ломается строкой ниже
    // this.toggle = !this.toggle;
    
  };
  return (
    <Typography 
    style={{textDecoration: toggle ? "line-through" : "none"}}>
      <Checkbox onChange={handleChange} />
      Чек-бокс
    </Typography>
  );
}
export default App;
