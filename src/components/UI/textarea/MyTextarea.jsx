import React from 'react';
import cl from './myTextarea.module.css';

const MyTextarea = (props) => {
    return (
        <textarea className={cl.myTextarea} {...props}/>
    );
};

export default MyTextarea;