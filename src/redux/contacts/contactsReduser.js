import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {addContact,removeContacts,setFilter} from './contactsAction';
const getcontactsFromLS = () => JSON.parse(localStorage.getItem("contacts")) || [];
const setcontactToLS = (contacts) =>
  localStorage.setItem("contacts", JSON.stringify(contacts));
  
const contactState = createReducer(getcontactsFromLS,{
  [addContact]: (state,{payload}) => {
    const addContact = [...state,payload]
    setcontactToLS(addContact)
    return addContact
  },
  [removeContacts]: (state,{payload})=>{
    const removeContact = state.filter((el) => el.id.toLowerCase() !== payload.toLowerCase())
    setcontactToLS(removeContact)
    return removeContact 
  }
})

const filterState = createReducer('',{
[setFilter]: (_,{payload})=>payload
})

// const contactState = (state = [], action) => {
//   switch (action.type) {
//     case "add/contacts":
//       return (state = [...state, action.payload]);
//     case "remove/contact":
//       return (state = state.filter((el) => el.name.toLowerCase() !== action.payload.toLowerCase()));
//     default:
//       return state;
//   }
// };

// const filterState = (state = "", action) => {
//   switch(action.type){
// case "filter/contact":
//   return(state = action.payload)
//   default :
//   return state
//   }

  // if (action.type === "filter/contact") {
  //   return (state = action.payload);
  // }
  // return state;
// };

const contactsReduser = combineReducers({ items: contactState, filter: filterState });
export default contactsReduser;
