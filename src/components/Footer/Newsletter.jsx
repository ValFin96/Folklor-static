import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Newsletter.css';
import NewsletterForm from './NewsletterForm';
import './Newsletter.css';

const SuccessMessage = ({ successMessage, clearSuccessMessage }) => {
  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        clearSuccessMessage();
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage, clearSuccessMessage]);

  return (
    <div style={{ color: "green", marginBottom:'2rem' }}>
      {successMessage}
    </div>
  );
};

const Newsletter = (props) => {

  const postUrl = `https://warikerestaurant.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  const [successMessage, setSuccessMessage] = useState('');

  const clearSuccessMessage = () => {
    setSuccessMessage('');
  };
  return (
    <div className="app__newsletter">
      <h3 className="app__newsletter-heading">Join our email list for future updates</h3>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <>
            {status === "sending" && <div style={{ color: "blue", marginBottom:'2rem' }}>sending...</div>}
            {status === "error" && <div style={{ color: "red", marginBottom:'2rem' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === "success" && (
              <SuccessMessage
                successMessage={successMessage}
                clearSuccessMessage={clearSuccessMessage}
              />
            )}
            <NewsletterForm
              status={status}
              message={message}
              onValidated={formData => {
                subscribe(formData);
                setSuccessMessage("You are successfully subscribed!"); // Set the success message
              }}
            />
          </>
        )}
      />
    </div>
  );
};

export default Newsletter;