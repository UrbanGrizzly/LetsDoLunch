import React from 'react';
import Preferences from './Profile_subcomponents/Preferences.jsx';

const columnClassString = (size) => `col col-xs-${size} col-md-${size} col-lg-${size} col-xl-${size}`;

const Profile = () => {
  return (
    <div className="container row">
      <div className={columnClassString(8)}>
        Fine, here is your Profile component. I hope you're happy.
      </div>
      <div className={columnClassString(4)}>
        <Preferences />
      </div>
    </div>
  );
}

export default Profile;