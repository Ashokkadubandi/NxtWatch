import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  width: 100%;
  height: 180px;
  margin: 8px;
`
export const ImageThumb = styled.img`
  height: 100%;
  width: 300px;
`
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.bgTheme ? '#cccccc' : '#323f4b')};
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
export const Name = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.bgTheme ? '#cccccc' : '#323f4b')};
`
