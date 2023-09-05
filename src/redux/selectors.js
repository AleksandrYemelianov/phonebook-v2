import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;

export const selectFilterValue = state => state.filter.filter;;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilterValue],
    ({ items }, filter) =>  items.filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
);

