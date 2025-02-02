import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(3, "Name is too short").max(50, "Name is too long"),
    number: Yup.string().required("Number is required").min(3, "Number is too short").max(50, "Number is too long"),
});

const ContactForm = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

       
        if (contacts.some((contact) => contact.name === name)) {
            alert(`${name} вже є у списку контактів.`);
            return;
        }

        
        dispatch(addContact({ name, number }));
        resetForm(); 
    };

    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <Form className={styles.form}>
                    <label className={styles.label}>
                        <span>Name</span>
                        <Field className={styles.input} type="text" name="name" />
                        <ErrorMessage name="name" component="div" className={styles.error} />
                    </label>

                    <label className={styles.label}>
                        <span>Number</span>
                        <Field className={styles.input} type="text" name="number" />
                        <ErrorMessage name="number" component="div" className={styles.error} />
                    </label>

                    <button type="submit" className={styles.button}>
                        Add contact
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
