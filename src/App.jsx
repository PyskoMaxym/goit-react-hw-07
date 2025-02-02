import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts, addContact } from "./redux/ContactOps";
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
const App = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchContacts());
  },[dispatch]);

  const handleAddContact = (contact) =>{
    dispatch(addContact(contact));
  }
  
  return (
    <>
      <ContactForm onSubmit = {handleAddContact}  />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App;