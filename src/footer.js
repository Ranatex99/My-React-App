import React, { useState } from 'react';
import './App.css';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

import './App'

function Footer(){
    const [inp,uinp]=useState("Thank You For Visiting My React App")
return (<div className="Footer">
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Humour Me !</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      placeholder="Enter Some Text to Print Below"
      onChange={(e)=>uinp(e.target.value)}
    />
  </InputGroup>
  <h2>{inp}</h2><hr />
  <h3>Created By Yours Truly © Maxenoius Inc</h3>
</div>)
}
export default Footer;