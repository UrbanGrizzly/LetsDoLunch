import React, { Component } from 'react';

export default ({ blacklist, removeFn }) => {
  return (
    <div>
    Your blacklist: 
    (You have asked us never to show these places)
      {blacklist.map(item => <div onClick={ ()=>removeFn(item.name) } key={item.name}>{item.name}</div>)}
    </div>
  )
}
