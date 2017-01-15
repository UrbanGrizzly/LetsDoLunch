import React from 'react';
import Preference from './Preference.jsx';

export default ({ favorite, mouseEnter, mouseLeave, removeFn }) => {
  return (
    <div className="preference-container">
      Favorites:
      { favorite && favorite.length ? favorite.map((listing, index) => (
        <Preference
        mouseEnter={ mouseEnter }
        mouseLeave={ mouseLeave }
        removeFn={ removeFn }
        pref={ listing }
        prefType={ "favorite" }
        index={ index }
        key={ index }
        />
      )) : "No items yet!" }
    </div>
  )
}
