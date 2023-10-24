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
`
export const HeadCon = styled.div`
  background-color: ${props => (props.bgTheme ? '#231f20' : '#f1f1f1')};
  height: 20vh;
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
export const LoaderCon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
`

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const NoImage = styled.img`
  height: 200px;
  width: 200px;
  @media (min-width: 576px) {
    min-width: 500px;
    height: 500px;
  }
`

export const NoHead = styled.h1`
  font-family: roboto;
  font-size: 18px;
  @media (min-width: 576px) {
    font-size: 25px;
  }
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#323f4b')};
  font-weight: bold;
`
export const NoPara = styled.p`
  font-family: Roboto;
  font-size: 15px;
  @media (min-width: 576px) {
    font-size: 25px;
  }
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#323f4b')};
`
export const Retry = styled.button`
  height: 38px;
  width: 100px;
  background-color: #909090;
  color: #ffffff;
  border-width: 0px;
  font-family: Roboto;
`
export const UnOrder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const List = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 540px;
  width: 300px;
  @media (max-width: 576px) {
    height: 200px;
    width: 120px;
  }
`
export const Image = styled.img`
  width: 250px;
  height: 500px;
  @media (max-width: 576px) {
    width: 100%;
    max-height: 100px;
  }
`
export const Name = styled.p`
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: roboto;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 15px;
  }
  font-weight: bold;
`
export const Watching = styled.p`
  color: ${props => (props.bgTheme ? '#323f4b' : '#94a3b8')};
  font-family: roboto;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 15px;
    line-height: 1;
  }
  margin-top: 0px;
  line-height: 0.5;
`
