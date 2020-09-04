import styled from 'styled-components';

export const Input = styled.input<any>`
  ${props => props.error && `border: 1px solid ${props.theme.colors.error};`}
  &:focus{
    outline:none;
  }
  display:block;
  margin:5px 0;
  padding:5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size:14px;
`;