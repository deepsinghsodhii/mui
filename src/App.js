import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteIcon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css';
import React, { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Button style={{margin:'1rem'}} >text button</Button>
     <Button color='secondary'  >secondary</Button>
     <Button color='primary' href="http://www.google.com"  >Link</Button>
 
     <Button disabled  color="success">disabled</Button>

    <h4>contained button</h4>
    <Button variant="contained">text button</Button>
     <Button variant="contained" color="error" >secondary</Button>
     <Button variant="contained" color='primary' href="http://www.google.com"  >Link</Button>
 
     <Button variant="contained" disabled  color="success">disabled</Button>
    <h4>outlined button</h4>
    <Button variant="outlined">text button</Button>
     <Button variant="outlined" color="secondary" >secondary</Button>
     <Button variant="outlined" color='primary' href="http://www.google.com"  >Link</Button>
     <Button variant="outlined" disabled  color="success">disabled</Button>
    <h4>size</h4>
     <Button size='large' variant="outlined" color="error" >secondary</Button>
     <Button size='medium' variant="outlined" color='primary' href="http://www.google.com"  >Link</Button>
     <Button size='small' variant="outlined" disabled  color="success">disabled</Button>
     <h4>button with icon</h4>
     {/* <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" endIcon={<SendIcon />}>Send</Button> */}
    </div>
  );
}

export default App;
