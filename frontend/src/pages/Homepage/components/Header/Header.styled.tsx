import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.components.header.backgroundColor};
  padding: ${props => props.theme.components.header.padding};
  height: ${props => props.theme.components.header.height};
  color: ${props => props.theme.components.header.color};
  display:flex;
`;

export const Logo = styled.div`
  display:flex;
  flex-direction: column;
  flex:1;
`;

export const Title = styled.div`
  flex:1;
  font-size:20px;
  font-weight: 800;
`;

export const Subtitle = styled.div`
  flex:1;
  font-size:16px;
  font-weight: 100;
`;

export const Menu = styled.div`
  flex:1;
  justify-content: flex-end;
  display:flex;
  li{
    list-style-type:none;
    display:inline;
    margin:0 10px;
    font-size:18px;
    font-weight:100;
  }
  
`;