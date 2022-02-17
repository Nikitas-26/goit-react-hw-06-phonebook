import { combineReducers } from "redux";

const contactState = (state = [], action) => {
  switch (action.type) {
    case "add/contacts":
      return (state = [...state, action.payload]);
    case "remove/contact":
      return (state = state.filter((el) => el.name.toLowerCase() !== action.payload.toLowerCase()));
    default:
      return state;
  }
};

const filterState = (state = "", action) => {
  if (action.type === "filter/contact") {
    return (state = action.payload);
  }
  return state;
};

const contactsReduser = combineReducers({ items: contactState, filter: filterState });
export default contactsReduser;
