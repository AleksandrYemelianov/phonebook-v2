import { createContact, deleteContact, getContacts } from "redux/operations";

const operationsThunk = [createContact, deleteContact, getContacts];
export const operationsType = (type) => operationsThunk.map(operation => operation[type]);