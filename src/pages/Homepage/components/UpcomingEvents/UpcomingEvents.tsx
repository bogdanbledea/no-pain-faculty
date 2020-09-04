import React from 'react';
import { Container, Title, Events, Event, EventType, Subject, Date, Action, EventHead } from './UpcomingEvents.styled';
import Button from '../../../../commons/components/Button/Button';

const UpcomingEvents = () => {
  return (
    <Container>
      <Title>Hi Bogdan, these are your upcoming events</Title>
      <Events>
        <Event>
          <EventHead>
            <EventType>Exam</EventType> @ <Subject>Cloud Computing</Subject>
          </EventHead>
          <Date>17 June 2020, 18:00</Date>
          <Action>
            <Button mt={1} buttonType="info">View details</Button>
          </Action>
        </Event>
        <Event>
          <EventHead>
            <EventType>Project</EventType> @ <Subject>Network Security</Subject>
          </EventHead>
          <Date>20 June 2020, 18:00</Date>
          <Action>
            <Button mt={1} buttonType="info">View details</Button>
          </Action>
        </Event>
        <Event>
          <EventHead>
            <EventType>Homework</EventType> @ <Subject>Database Management</Subject>
          </EventHead>
          <Date>21 June 2020, 23:55</Date>
          <Action>
            <Button mt={1} buttonType="info">View details</Button>
          </Action>
        </Event>
      </Events>
    </Container>
  )
}

export default UpcomingEvents;