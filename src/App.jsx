import { GlobalStyle } from "./components/GlobalStyle";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import { ContactProvider } from "./ContactContext";

function App() {
  return (
    <ContactProvider>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </ContactProvider>
  );
}

export default App;
