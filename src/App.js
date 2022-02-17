import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
import {connect} from 'react-redux';
import {addContact,setFilter} from './redux/contacts/contactsAction';
const App = ({contacts,addContact,setFilter,filter}) => {
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterItems = (query) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };

  const onInputValue = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "filter":
        setFilter(value);
        break;
      default:
        return;
    }
  };


  const onBtnSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      id: nanoid(),
      number,
    };
    const dublicate = contacts.some((el) => el.name.toLowerCase() === name.toLowerCase());
    if (!dublicate) {
      return addContact(newContact);
    } else {
      alert(`${name} alredy in contacts`);
    }
  };
  return (
    <>
      <h1>PhoneBook</h1>
      <Form onInputValue={onInputValue} onBtnSubmit={onBtnSubmit} />
      <h2>Contacts</h2>
      <FilterItems filter={filter} onInputValue={onInputValue} />
      <ul>
        <ContactsListItem filter={filterItems(filter)}/>
      </ul>
    </>
  );
};

const mapStateToProps = (state)=>{
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter
  }
}
const mapDispatchToProps = {
  addContact,
  setFilter
}

export default connect(mapStateToProps,mapDispatchToProps)(App);