import styled from 'styled-components';

export const Container = styled.div`
  padding: ${props => props.theme.components.upcomingEvents.padding};
`;

export const Title = styled.div`
  font-size:18px;
  font-weight:100;
`;

export const Events = styled.div`
  display:flex;
  padding:1rem 0;
`;

export const Event = styled.div`
  margin-left:5px;
  padding:5px;
  border:1px solid #bdc3c7;
  height:90px;
  width:300px;
  font-weight: 100;
`;

export const EventHead = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export const EventType = styled.span`
  font-weight: 600;
`;

export const Subject = styled.span`
`;

export const Date = styled.div`

`;

export const Action = styled.div``;