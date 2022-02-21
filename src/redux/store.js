import contactsReduser from "./contacts/contactsReduser";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from 'redux-persist/integration/react'
// const contactsPersistConfig = {
//     key: "items",
//     version: 1,
//     storage,
//     blacklist: ["filter"],
//   };
//   const contactsPersistedReducer = persistReducer(contactsPersistConfig, contactsReduser);
const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
    // }),
  // devTools: process.env.NODE_ENV === "development"
});

export default store;
