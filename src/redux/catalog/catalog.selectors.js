import { createSelector } from "reselect";

const selectCatalog = state => state.catalog;

export const selectCollectionsFromCatalog = createSelector(
    [selectCatalog],
    catalog => catalog.collections
)

export const selectHoverItem = createSelector(
    [selectCatalog],
    catalog => catalog.selectedItem
)