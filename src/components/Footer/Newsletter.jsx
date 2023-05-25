import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
import NewsletterForm from './NewsletterForm';
import './Newsletter.css';


const Newsletter = (props) => {

  const postUrl = `https://warikerestaurant.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <>
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          <NewsletterForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />

          </>
        )}
      />
    </div>
  );
};

export default Newsletter;