import {createSelector} from "reselect";

const selectCollection = state => state.shop;

export const selectCollectionItems = createSelector(
    [selectCollection],
    shop => shop.collections
)