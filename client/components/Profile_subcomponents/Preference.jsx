import React, { Component } from 'react';

export default (props) => {
  return (
    <div>
      {props.pref.name}: {props.pref.type}
    </div>
  );
}
