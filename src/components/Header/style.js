import styled from 'styled-components'

export const MobileHead = styled.div`
  display: flex;
  @media (min-width: 576px) {
    display: none;
  }
  justify-content: space-between;
  padding: 15px;
  background-color: ${props => (props.bgTheme ? '#181818' : '#f9f9f9')};
`
export const ControlFlex = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#181818')};
  width: 120px;
  @media (min-width: 576px) {
    min-width: 190px;
  }
  font-size: 28px;
  align-items: center;
`
export const HeadLogo = styled.img`
  height: 40px;
  width: 150px;
`
export const LargeWidth = styled.div`
  display: flex;
  @media (max-width: 576px) {
    display: none;
  }
  justify-content: space-between;
  padding: 15px;
  background-color: ${props => (props.bgTheme ? '#181818' : '#f9f9f9')};
`
export const LogOut = styled.button`
  background-color: transparent;
  border-width: 1px solid #72fa3c;
  color: ${props => (props.bgTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  height: 40px;
  width: 90px;
`
