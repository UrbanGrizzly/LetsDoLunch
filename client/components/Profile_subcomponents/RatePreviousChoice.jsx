import React from 'react';

export default (props) => {
  let { listing: { name }, listing, moveToBlacklist, moveToFavorites } = props;

  let blacklist = () => moveToBlacklist(listing);
  let favorite = () => moveToFavorites(listing);

  return (
    <div className="container rate-previous-choice">
      <h3>{ name }</h3>
      <ul>
        <li onClick={ favorite }>Add to favorites</li>
        <li onClick={ blacklist }>Blacklist it</li>
      </ul>
    </div>
  );
}
