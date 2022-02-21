import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
import {connect} from 'react-redux';
const App = ({contacts,filter}) => {
const filterItems = (query) => {
    return contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };
  return (
    <>
      <h1>PhoneBook</h1>
      <Form />
      <h2>Contacts</h2>
      <FilterItems/>
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
export default connect(mapStateToProps)(App);