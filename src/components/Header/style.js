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
    min-width: 250px;
  }
  font-size: 28px;
  align-items: center;
`
export const HeadLogo = styled.img`
  height: 40px;
  width: 150px;
  cursor: pointer;
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
export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
`
export const ThemeBtn = styled.button`
  height: 40px;
  width: 40px;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#181818')};
`

export const LogOut = styled.button`
  background-color: transparent;
  border-width: 1px solid #72fa3c;
  color: ${props => (props.bgTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  height: 40px;
  width: 90px;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  backdrop-filter: invert(15%);
`

export const PopupCard = styled.div`
  height: 200px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  opacity: 1;
  background-color: ${props => (props.bgTheme ? '#181818' : '#f9f9f9')};
`
export const PopAlert = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.bgTheme ? '#ffffff' : '#181818')};
`
export const PopBtnCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`
export const PopBtn = styled.button`
  font-family: Roboto;
  width: 100px;
  height: 40px;
  border: 1px solid #323f4b;
  cursor: pointer;
  outline: none;
`
export const BarTheme = styled.div`
  background-color: ${props => (props.bgTheme ? '#181818' : '#ffffff')};
  display: flex;
  flex-direction: column;
`
export const BarRoute = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  background-color: ${props => (props.bgTheme ? '#181818' : '#ffffff')};
`
export const Bars = styled.li`
  font-family: Roboto;
  line-height: 1.8;
  font-size: 15px;
  color: ${props => (props.bgTheme ? '#ffffff' : '#181818')};
`
