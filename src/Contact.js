import React from 'react';
import './App.css';
import {useParams} from 'react-router-dom'

const Contact = () => {
  const {svar}=useParams();
  const {dvar}=useParams();
    return (
        <div className="Contact">
            <h3>Now We Can Contact {svar} {dvar}</h3>
        </div>
    );
}
export default Contact;