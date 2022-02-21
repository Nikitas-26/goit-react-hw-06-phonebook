
import { connect} from 'react-redux';
import {setFilter} from '../../redux/contacts/contactsAction';
const FilterItems = ({setFilter}) => {
    return ( <><input onChange={(e)=>{
        const {value} = e.target;
        setFilter(value)
    }} name="filter">
    </input></> );
}
const mapDispatchToProps ={ 
    setFilter: setFilter
}
export default connect(null,mapDispatchToProps)(FilterItems) ;