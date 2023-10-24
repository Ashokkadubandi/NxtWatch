import styled from 'styled-components'

export const VideoFlexCon = styled.div`
  display: flex;
  background-color: ${props => (props.bgTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-right: 40px;
`
export const VideoCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
  padding-bottom: 40px;
`
export const SavedHead = styled.div`
  background-color: ${props => (props.bgTheme ? '#231f20' : '#f1f1f1')};
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
export const FontDiv = styled.div`
  border-radius: 70%;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  background-color: ${props => (props.bgTheme ? '#000000' : '#d7dfe9')};
  font-size: 500px;
  color: red;
  align-items: center;
`
export const TrendHead = styled.h1`
  font-family: Roboto;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#0f0f0f')};
  font-size: 35px;
  padding-left: 15px;
`
export const Unorder = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 100%;
  height: 100vh;
`
export const NoImage = styled.img`
  height: 400px;
  @media (max-width: 576px) {
    height: 200px;
  }
  width: 500px;
  @media (max-width: 576px) {
    width: 200px;
  }
`
export const NoText = styled.h1`
  font-family: Roboto;
  @media (max-width: 576px) {
    font-size: 20px;
  }
  font-size: 28px;
  color: ${props => (props.bgTheme ? '#ffffff' : '#616e7c')};
`
export const NoPara = styled.p`
  font-family: roboto;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 15px;
  }
  color: ${props => (props.bgTheme ? '#f1f1f1' : '#616e7c')};
`
