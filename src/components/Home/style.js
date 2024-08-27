import styled from 'styled-components'

export const VideoFlexCon = styled.div`
  display: flex;
  background-color: ${props => (props.bgTheme ? '#181818' : '#f9f9f9')};
  padding-right: 40px;
`
export const VideoCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-right: 15px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 30px;
`
export const BanLogo = styled.img`
  height: 38px;
  width: 150px;
`
export const PremiumAlert = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: #323f4b;
`
export const BanButton = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: #323f4b;
  font-weight: bold;
  border: 2px solid #323f4b;
  padding: 10px;
  height: 40px;
  width: 120px;
`
export const CloseBtn = styled.button`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  border-width: 0px;
  outline: none;
  cursor: pointer;
`
export const ApiContent = styled.div`
  padding-left: 20px;
  padding-top: 20px;
`
export const SearchCon = styled.div`
  display: flex;
  align-items: center;
`
export const SearchInp = styled.input`
  height: 35px;
  border: 1px solid '#323f4b';
  width: 250px;
  @media (min-width: 576px) {
    min-width: 350px;
  }
  padding-left: 15px;
  font-family: Roboto;
  color: #323f4b;
  outline: none;
`
export const SearchBtn = styled.button`
  height: 35px;
  width: 60px;
`
export const ContentFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const OrderVideosCon = styled.ul`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  flex-wrap: wrap;
  padding-left: 0px;
  height: 100vh;
  overflow: scroll;
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
  font-size: 10px;
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
