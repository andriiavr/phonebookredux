import { combineReducers } from "redux";

const initialState = {
  contacts: [],
  filter: "",
};

const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return [...state, action.payload];
    }
    case "contacts/removeContact": {
      return state.filter((contact) => contact.id !== action.payload);
    }
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case "filter/updateFilter": {
      console.log(action.payload);
      return action.payload
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
