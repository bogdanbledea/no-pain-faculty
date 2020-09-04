import React from 'react';
import { Container } from './Homepage.styled';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

const Homepage = () => {
  return (
    <Container>
      <UpcomingEvents />
    </Container>
  )
}

export default Homepage
