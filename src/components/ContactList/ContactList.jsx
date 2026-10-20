import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { Contact, Text } from "./ContactList.styled";
import { removeContact } from "../../redux/actions";

function ContactList() {
  // const {contacts, deleteContact, filter} = useContact()
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()

  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <Contact key={id}>
            <Text>
              {name}: {number}
            </Text>
            <button type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </button>
          </Contact>
        ))}
    </ul>
  );
}

export default ContactList;
