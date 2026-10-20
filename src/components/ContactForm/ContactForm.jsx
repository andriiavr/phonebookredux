import { useState } from "react";
import { Form, Label } from "./ContactForm.styled";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";

function ContactForm() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    // const {addContact} = useContact()
    const dispatch = useDispatch()

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break
            case 'number':
                setNumber(value)
                break
            default:
                return
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(addContact(name, number))
        setName('')
        setNumber('')
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+([' \-][a-zA-Zа-яА-ЯёЁіІїЇєЄ]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoFocus
          required
        />
      </Label>
      <Label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="[0-9+\(\)\-\s]{7,15}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
}

export default ContactForm