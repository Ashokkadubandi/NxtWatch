import styled from 'styled-components'

export const VideoFlexCon = styled.div`
  display: flex;
  background-color: ${props => (props.bgTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-right: 40px;
  padding-bottom: 100px;
`
export const VideoCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 40px;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
  padding-top: 40px;
  padding-bottom: 40px;
`
export const LargeVideoContainer = styled.div`
  width: 1050px;
  height: 500px;
  @media (max-width: 576px) {
    display: none;
  }
`
export const SmallVideoContainer = styled.div`
  max-width: 360px;
  height: 200px;
  @media (min-width: 576px) {
    display: none;
  }
`
export const VideoDescription = styled.p`
  font-family: Roboto;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
  color: ${props => (props.bgTheme ? '#f4f4f4' : '#212121')};
`
export const StatusCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  @media (max-width: 576px) {
    width: 140px;
  }
  height: 50px;
`
export const Status = styled.p`
  font-family: Roboto;
  font-size: 18px;
  @media (max-width: 576px) {
    font-size: 10px;
  }
  color: ${props => (props.bgTheme ? '#64748b' : '#64748b')};
`
export const LikesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  @media (max-width: 576px) {
    width: 180px;
    padding-right: 10px;
  }
`

export const LikedButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  align-items: center;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 10px;
  }
  color: ${props => (props.bgTheme ? '#616e7c' : '#616e7c')};
  cursor: pointer;
`

export const LoaderCon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  width: 100%;
`
export const ParaText = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
`
export const Dot = styled.p`
  font-family: Roboto;
  font-size: 38px;
  color: ${props => (props.bgTheme ? '#4f46e5' : '#616e7c')};
  padding-bottom: 15px;
  padding-left: 20px;
  @media (max-width: 576px) {
    padding-left: 8px;
  }
`
export const Horizont = styled.hr`
  width: 100%;
  background-color: ${props => (props.bgTheme ? '#ebebeb' : '#f1f5f9')};
`
export const BottomTextCon = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  align-items: flex-start;
`
export const Logo = styled.img`
  height: 60px;
  width: 50px;
  padding-top: 15px;
`
export const TextBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.bgTheme ? '#ffffff' : '#212121')};
`
export const Subscribers = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.bgTheme ? '#616e7c' : '#616e7c')};
  line-height: 0;
  margin-top: 0px;
`
export const AboutVideo = styled.p`
  font-family: roboto;
  font-size: 14px;
  color: ${props => (props.bgTheme ? '#f1f5f9' : '#475569')};
  line-height: 1.8;
`
