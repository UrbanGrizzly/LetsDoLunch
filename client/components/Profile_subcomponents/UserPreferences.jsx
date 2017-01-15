import React from 'react';
import Preference from './Preference.jsx';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import PreferenceInputForm from '../Form.jsx';


export default ({ prefs, removeFn, mouseEnter, mouseLeave, submitPrefForm }) => {
  console.log(prefs);
  return (
    <div className="preference-container">
      Default Preferences:
      {
        prefs.map((pref, index) => (
        <Preference
        mouseEnter={mouseEnter}
        mouseLeave={mouseLeave}
        removeFn={removeFn}
        pref={pref}
        prefType={"preferences"}
        index={index}
        key={index}
        />))
      }

        <div>

          <PreferenceInputForm onSubmit={(pref) => submitPrefForm(pref)}/>
        </div>
    </div>
  )
}
