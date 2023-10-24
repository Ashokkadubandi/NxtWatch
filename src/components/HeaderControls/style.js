import styled from 'styled-components'

export const HeadControl = styled.div`
  display: flex;
  @media (max-width: 576px) {
    display: none;
  }
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding-left: 15px;
  height: 95vh;
  background-color: ${props => (props.bgTheme ? '#181818' : '#f9f9f9')};
`
export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`
export const List = styled.li`
  display: flex;
  align-items: center;
  width: 150px;
  font-size: 25px;
  line-height: 1;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#181818')};
`
export const ListName = styled.p`
  font-family: Roboto;
  font-size: 22px;
  padding-left: 13px;
`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#181818')};
`
export const Contact = styled.h1`
  font-family: roboto;
  font-size: 20px;
  font-weight: 500;
`
export const ImageLogoCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`
export const Image = styled.img`
  height: 35px;
  width: 35px;
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
`
