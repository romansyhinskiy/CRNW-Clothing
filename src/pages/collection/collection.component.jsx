import React from 'react'

import {connect} from 'react-redux'
import {selectCollectionId} from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

const CollectionPage = ({match}) => {
    console.log(match);
    
    return (
        <div className="collection-page">
            <h2>Collection page</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionId(ownProps.match.params.collectionId)
})
export default connect(mapStateToProps)(CollectionPage);
