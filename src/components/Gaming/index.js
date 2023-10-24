import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoLogoGameControllerB} from 'react-icons/io'
import NxtWatch from '../../Context/contextVideo'
import Header from '../Header'
import HeadControls from '../HeaderControls'

import {
  VideoFlexCon,
  VideoCon,
  HeadCon,
  TrendHead,
  FontDiv,
  NoData,
  NoImage,
  NoPara,
  NoHead,
  Retry,
  LoaderCon,
  UnOrder,
  List,
  Name,
  Image,
  Watching,
} from './style'

import './index.css'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {apiStatus: apiConstants.initial, videos: []}

  componentDidMount() {
    this.getGamingApiData()
  }

  getGamingApiData = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updateData = data.videos.map(each => ({
        id: each.id,
        thumbNailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({apiStatus: apiConstants.success, videos: updateData})
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderGamingLoader = () => (
    <LoaderCon>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderCon>
  )

  renderGamingSuccessView = () => {
    const {videos} = this.state
    return (
      <NxtWatch.Consumer>
        {value => {
          const {theme} = value

          return (
            <UnOrder>
              {videos.map(each => {
                const {id, thumbNailUrl, title, viewCount} = each

                return (
                  <Link to={`/videos/${id}`} className="link">
                    <List key={id}>
                      <Image src={thumbNailUrl} alt="pop" />
                      <Name bgTheme={theme}>{title}</Name>
                      <Watching bgTheme={theme}>
                        {viewCount} watching world wide
                      </Watching>
                    </List>
                  </Link>
                )
              })}
            </UnOrder>
          )
        }}
      </NxtWatch.Consumer>
    )
  }

  renderGamingFailureView = () => (
    <NxtWatch.Consumer>
      {value => {
        const {theme} = value
        const ErrorImage = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <NoData>
            <NoImage src={ErrorImage} alt="no videos" />
            <NoHead bgTheme={theme}>Oops! Something Went Wrong</NoHead>
            <NoPara bgTheme={theme}>
              We are having some trouble to complete your request. Please try
              again
            </NoPara>
            <Retry>Retry</Retry>
          </NoData>
        )
      }}
    </NxtWatch.Consumer>
  )

  renderApiCalls = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderGamingSuccessView()
      case apiConstants.failure:
        return this.renderGamingFailureView()
      case apiConstants.loading:
        return this.renderGamingLoader()

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <VideoFlexCon bgTheme={theme}>
                <HeadControls />
                <VideoCon>
                  <HeadCon bgTheme={theme}>
                    <FontDiv bgTheme={theme}>
                      <IoLogoGameControllerB className="font" />
                    </FontDiv>
                    <TrendHead bgTheme={theme}>Gaming</TrendHead>
                  </HeadCon>
                  {this.renderApiCalls()}
                </VideoCon>
              </VideoFlexCon>
            </>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}

export default Gaming
