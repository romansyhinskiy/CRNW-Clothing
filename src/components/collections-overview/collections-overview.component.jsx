import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionItems} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItems
})
export default connect(mapStateToProps)(CollectionsOverview)