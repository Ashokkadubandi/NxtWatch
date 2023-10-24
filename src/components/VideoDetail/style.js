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
  justify-content: space-between;
  width: 250px;
  background-color: red;
`
export const Status = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.bgTheme ? ' #4f46e5' : '#616e7c')};
`
export const LikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`

export const LikedButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${props => (props.bgTheme ? ' #4f46e5' : '#616e7c')};
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
  font-size: 18px;
`
