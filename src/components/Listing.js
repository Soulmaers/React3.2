import Item from './Item.js'
import PropTypes from 'prop-types'
import React from 'react'


export default function Listing({ items }) {

    return (
        <div className="item-list">
            {items.map((el) => <Item item={el} key={el.listing_id} />)}
        </div>
    )

}

Listing.defaultProps = {
    items: [],
}
Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}