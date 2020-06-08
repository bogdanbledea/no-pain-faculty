import styled from 'styled-components';
import { ButtonProps } from 'commons/components/Button/Button';
import { space } from 'styled-system';
import { SpaceProps } from 'commons/types/SpaceProps';

export const BaseButton = styled.button<ButtonProps & SpaceProps>`
  ${space}
  border:0;
  background-color:transparent;
  cursor:pointer;
  color:#ffffff;
  font-weight:100;
  outline:none;
  font-size:16px;
  padding:5px;
  border-radius:5px;
  ${props => props.buttonType === 'success' && 'background-color: #28a745' };
  ${props => props.buttonType === 'info' && 'background-color:#117a8b'};
`;