import { createContext, useContext, useReducer } from "react";
import { nanoid } from "nanoid";

const ContactContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'set_contacts': {
      return {
        ...state,
        contacts: action.nextContacts
      }
    }
    case 'set_filter': {
      return {
        ...state,
        filter: action.nextFilter
      }
    }
    default: {
      return state;
    }
  }
}

export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [],
    filter: '',
  }

  const [{contacts, filter}, dispatch] = useReducer(reducer, initialState)

  const addContact = (name, number) => {
    if (contacts.some((contact) => contact.name === name)) {
      const message = `${name} is already in contacts!`;
      console.warn(message);
      alert(message);
      return;
    }

    const nextContacts = [...contacts, { id: nanoid(), name, number }]
    dispatch({type: 'set_contacts', nextContacts})
    // setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = (id) => {
    const nextContacts = contacts.filter((contact) => contact.id !== id);
    dispatch({type: 'set_contacts', nextContacts})
  };

  const filterChange = filter => dispatch({type: 'set_filter', nextFilter: filter});

  return (
    <ContactContext.Provider
      value={{
        contacts,
        filter,
        addContact,
        deleteContact,
        filterChange,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
