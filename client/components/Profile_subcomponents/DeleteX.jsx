import React from 'react';

export default ({ removeFn }) => (
  <div>
    <span 
    className="delete-button" 
    onClick={ removeFn } 
    dangerouslySetInnerHTML={{ __html: '&#10006;' }} 
    />
    <hr />
  </div>
)
