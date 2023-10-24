import styled from 'styled-components'

export const VideoList = styled.li`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  margin: 10px;
`
export const Image = styled.img`
  height: 150px;
  width: 100%;
`
export const VideoContent = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: flex-start;
  width: 100%;
`
export const AccountLogo = styled.img`
  height: 50px;
  width: 50px;
  padding-top: 10px;
`
export const VideoDescCon = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  justify-content: space-between;
`
export const VideoDescription = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#181818')};
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #323f4b;
  line-height: 0;
  margin-top: 0px;
`
export const StatusDuration = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 40px;
  align-items: center;
`
export const Dot = styled.p`
  font-weight: bold;
  color: #323f4b;
`
export const Status = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: #323f4b;
`
