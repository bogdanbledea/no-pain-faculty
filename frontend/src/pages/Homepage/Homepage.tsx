import React from 'react';
import { Container } from './Homepage.styled';
import Header from './components/Header/Header';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

const Homepage = () => {
  return (
    <Container>
      <Header />
      <UpcomingEvents />
    </Container>
  )
}

export default Homepage
