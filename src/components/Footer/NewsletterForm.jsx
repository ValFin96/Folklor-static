import React, { useState } from 'react';
import InputField from "./InputField";

const NewsletterForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            firstName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
            });

            setEmail('');
            setFirstName('');
    }

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="app__newsletter-input">
                <InputField
                    onChangeHandler={setFirstName}
                    type="text"
                    value={firstName}
                    placeholder="Your Name"
                    isRequired
                />

                <InputField
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="Your@email.com"
                    isRequired
                />

            </div>

            <InputField
                label="Subscribe"
                type="submit"
                formValues={[email, firstName]}
            />
        </form>
        
    );
};

export default NewsletterForm;