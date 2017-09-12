import React, { Component } from 'react';

import XLabel from './XLabel.js';
import Timer from './Timer.js';
import ToggleButton from './ToggleButton.js';
import Welcome from './Welcome.js';
import '../css/x.css';


 export default class TestComponent extends React.Component{

   render(){
       return (
           <div>
        <Timer></Timer>
        <Welcome name='doudou'></Welcome>
        <div className="test">
          <ToggleButton></ToggleButton>
        </div>
        <XLabel></XLabel>
        </div>
       )
   }
}