import {createStore,combineReducers} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import contactsReduser from './contacts/contactsReduser';
const rootReduser = combineReducers({contacts:contactsReduser})

const store = createStore(rootReduser,composeWithDevTools())

export default  store;
