import styled from 'styled-components'

export const VideoFlexCon = styled.div`
  display: flex;
  background-color: ${props => (props.bgTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-right: 40px;
  height: 100vh;
`
export const VideoCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const NotFoundCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  @media (max-width: 576px) {
    padding-top: 0px;
  }
  width: 100%;
`
export const NotImg = styled.img`
  height: 400px;
  width: 450px;
  @media (max-width: 576px) {
    height: 200px;
    width: 200px;
  }
`
export const NotHead = styled.h1`
  font-family: Roboto;
  font-size: 23px;
  color: ${props => (props.bgTheme ? '#f9f9f9' : '#181818')};
`
export const NotDesc = styled.p`
  font-family: Roboto;
  font-size: 18px;
  @media (max-width: 576px) {
    font-size: 13px;
  }
  color: ${props => (props.bgTheme ? '#f1f5f9' : '#323f4b')};
`
