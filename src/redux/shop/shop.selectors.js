import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectCollection = state => state.shop;

export const selectCollectionItems = createSelector(
    [selectCollection],
    shop => shop.collections
)

export const selectCollectionId = collectionUrlParam => 
createSelector(
    [selectCollection],
    collections => 
        collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)