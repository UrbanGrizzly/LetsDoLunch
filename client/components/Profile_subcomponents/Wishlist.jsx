import React from 'react';
import Preference from './Preference.jsx';

export default ({ wishlist, mouseEnter, mouseLeave, removeFn }) => {
  return (
    <div className="preference-container">
      Wish List:
      { wishlist && wishlist.length ? wishlist.map((listing, index) => (
        <Preference
        mouseEnter={ mouseEnter }
        mouseLeave={ mouseLeave }
        removeFn={ removeFn }
        pref={ listing }
        prefType={ "wishlist" }
        index={ index }
        key={ index }
        />
      )) : "No items yet!" }
    </div>
  )
}
