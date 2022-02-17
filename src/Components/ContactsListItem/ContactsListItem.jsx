import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {removeContacts} from '../../redux/contacts/contactsAction';
const ContactsListItem = ({ filter, removeContacts }) => {
  return (
    <>
      {filter.map((contact) => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button
            type="button"
            onClick={(e) => {
              removeContacts(contact.name);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactsListItem.prototypes = {
  filter: PropTypes.string.isRequired,
  removeName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapDispatchToProps= {
  removeContacts,
}

export default connect(null,mapDispatchToProps)(ContactsListItem);
