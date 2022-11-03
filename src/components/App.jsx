import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from "redux/operations";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm ></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      <ContactList ></ContactList>
    </>
  );
};






 

  //const addContact = ({ name, number }) => {
  //  const newContact = {
  //    id: nanoid(),
  //    name,
  //    number,
  //  };
  //  const normalizeNewContact = name.toLowerCase();
  //  const addedName = contacts.find(contact => contact.name.toLowerCase() === normalizeNewContact);
        
  //  if (addedName) {
 //     return alert(`${name} is already in contacts.`);
  //  }

  //  setContacts(prevState => [newContact, ...prevState],
  //  );
  //  console.log('done')

  //}

  //const deleteContact = (contactId) => {
 //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId)
  //  )
 // };


   //const changeFilter = event => {
  //  setFilter(event.currentTarget.value );
 // }

  //const getFilterContacts = () => {
   // const normalizedFilter = filter.toLowerCase();
  
   // return contacts.filter(contact =>
   //   contact.name.toLowerCase().includes(normalizedFilter)
   // );
  //};
  