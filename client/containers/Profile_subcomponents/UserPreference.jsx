import React, { Component } from 'react';

export default ({ pref: { name, type }}) => {
  return (
    <div>
      { name }: { type }
    </div>
  );
}
