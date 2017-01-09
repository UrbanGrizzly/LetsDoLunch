import React, { Component } from 'react';

export default ({ pref: { name, type, showOptions }, removeFn }) => {

  return (
    <div onClick={ ()=>removeFn(name) }>
      { name }: { type }
      { showOptions ? 'hello' : ''}
    </div>
  );
}
