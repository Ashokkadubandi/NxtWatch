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
  padding-top: 30px;
`

export const UnOrder = styled.ul`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    align-items: center;
  }
  height: 120vh;
  //   overflow: scroll;
`
export const List = styled.li`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  margin-top: 12px;
`
export const VideoImage = styled.img`
  height: 180px;
  max-width: 450px;
`
export const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const Title = styled.p`
  font-family: roboto;
  font-size: 23px;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#383838')};
`
export const Name = styled.p`
  font-family: roboto;
  font-sizze: 15px;
  color: ${props => (props.bgTheme ? '#cccccc' : '#323f4b')};
  margin-top: 0px;
  line-height: 0;
`
export const StatusCon = styled.div`
  display: flex;
  max-width: 250px;
  align-items: center;
  height: 30px;
`
export const Dot = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: ${props => (props.bgTheme ? '#cccccc' : '#323f4b')};
  padding-left: 15px;
  padding-right: 5px;
  padding-bottom: 15px;
`
export const Status = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => (props.bgTheme ? '#cccccc' : '#323f4b')};
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
