import styled from 'styled-components';
import { ButtonProps } from 'commons/components/Button/Button';
import { space } from 'styled-system';
import { SpaceProps } from 'commons/types/SpaceProps';

export const BaseButton = styled.button<ButtonProps & SpaceProps>`
  ${space}
  display:block;
  border:0;
  background-color:transparent;
  cursor:pointer;
  color:#ffffff;
  font-weight:100;
  outline:none;
  font-size:16px;
  padding:5px 15px;
  border-radius:5px;
  ${props => props.buttonType === 'success' && 'background-color: #28a745' };
  ${props => props.buttonType === 'info' && 'background-color:#03A9F4'};
  &:hover{
    ${props => props.buttonType === 'info' && 'background-color:#039BE5'};
  }
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
`;