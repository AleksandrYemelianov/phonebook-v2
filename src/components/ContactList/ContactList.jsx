import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader/Loader';
import optionNotification from 'components/Notification/Notification';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/operations';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';

import css from './ContactList.module.css';
import 'react-toastify/dist/ReactToastify.css';


const ContactList = () => {

  const { isLoading, error } = useSelector(selectContacts);

    const contacts = useSelector(selectVisibleContacts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch]);

    return (
        <>
            {isLoading && <Loader />}
            {error && toast.warn('The request could not be completed. Please try again later.', optionNotification)}
            <ul className={css.list}>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </>

    );
}

export default ContactList;