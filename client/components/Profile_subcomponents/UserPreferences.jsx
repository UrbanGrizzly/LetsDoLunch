import React from 'react';
import Preference from './Preference.jsx';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import PreferenceInputForm from '../Form.jsx';


export default ({ prefs, removeFn, mouseEnter, mouseLeave, submitPrefForm }) => {
  return (
    <div className="preference-container">
      Default Preferences:
      { 
        prefs && prefs.length ? prefs.map((pref, index) => (
        <Preference 
        mouseEnter={mouseEnter} 
        mouseLeave={mouseLeave} 
        removeFn={removeFn} 
        pref={pref} 
        prefType={"preferences"}
        index={index} 
        key={index} 
        />)) : 
        <div>
          <h4>Help us help you! Add some preferences here:</h4>
          <PreferenceInputForm onSubmit={() => console.log('testing')}/>
        </div>
      }
    </div>
  )
}
