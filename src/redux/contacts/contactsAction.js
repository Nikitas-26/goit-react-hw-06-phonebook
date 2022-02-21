import {createAction} from '@reduxjs/toolkit';
export const addContact = createAction("contacts/add")
export const removeContacts = createAction('contact/remove')
export const setFilter = createAction('contacts/filter')
// export const addContact = (contact) => {
//   return {
//     type: "add/contacts",
//     payload: contact,
//   };
// };

// export const removeContacts = (id) => {
//   return {
//     type: "remove/contact",
//     payload: id,
//   };
// };
// export const setFilter = (query) =>{
// return {
//     type: 'filter/contact',
//     payload: query
// }
// }