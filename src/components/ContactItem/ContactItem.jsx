import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from './ContactItem.module.css';

function ContactItem({ contact: {id, name, phone} }) {
    const dispatch = useDispatch();

    const handleDeleteContact = () => dispatch(deleteContact(id));

    return (
        <li id={id} className={css.item}>
            <p className={`${css.info} ${css.point}`}>{name}:</p>
            <p className={css.info}>{phone}</p>
            <button onClick={() => handleDeleteContact(id)} className={css.btn}>Delete</button>
        </li>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
};

export default ContactItem