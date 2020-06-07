import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.header.backgroundColor};
  padding: ${props => props.theme.header.padding};
  height: ${props => props.theme.header.height};
  color: ${props => props.theme.header.color};
`
