import React from "react";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/ContactSlice";
import styles from "./ContactList.module.css";

const ContactList = () =>{
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();
    
    
    return(
        <ul className={styles.list}>
            {contacts.map(({id, name, number})=>(
                <Contact key={id} id={id} name={name} number={number} onDelete={()=> dispatch(deleteContact(id))}  />
            ))}

        </ul>
    )
}

export default ContactList;