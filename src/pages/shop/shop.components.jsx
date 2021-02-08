import React from "react"
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux'
import {selectCollectionItems} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({collections}) => (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItems
})
export default connect(mapStateToProps)(ShopPage)