import React, { Component } from 'react'

import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ContactCard from "./ContactCard";
import { render } from '@testing-library/react';

function ContactList(props) {


const renderContactList = props.contacts.map((contact) => {
    return (
      <Container>
  
  <Row>
      <ContactCard
        contact={contact}
      />
</Row>     
</Container>  
    );
  });
  return (
    <div className="main">
      <h2 >
        Articles List
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
  }

export default ContactList;
