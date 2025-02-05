import React from "react";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactSlice";
import styles from "./ContactList.module.css";

const ContactList = () =>{
    const contacts = useSelector(selectFilteredContacts); 
    return(
        <ul className={styles.list}>
            {contacts.map(({id, name, number})=>(
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    )
}

export default ContactList;