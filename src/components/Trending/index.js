import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaHotjar} from 'react-icons/fa'
import NxtWatch from '../../Context/contextVideo'
import Header from '../Header'
import HeadControls from '../HeaderControls'

import {
  VideoFlexCon,
  VideoCon,
  HeadCon,
  TrendHead,
  FontDiv,
  UnOrder,
  List,
  VideoImage,
  TextCon,
  Title,
  Name,
  StatusCon,
  Dot,
  Status,
  LoaderCon,
  NoData,
  NoImage,
  NoHead,
  NoPara,
  Retry,
} from './style'
import './index.css'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {videos: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTrendingApi()
  }

  getTrendingApi = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data.videos)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        name: each.channel.name,
        publishedAt: each.published_at,
        title: each.title,
        thumbNail: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({videos: updatedData, apiStatus: apiConstants.success})
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderCon>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderCon>
  )

  renderVideosView = () => {
    const {videos} = this.state

    return (
      <NxtWatch.Consumer>
        {value => {
          const {theme, changeIcon} = value
          const changeIconColor = () => {
            changeIcon('INITIAL')
          }

          return (
            <UnOrder className="scroll">
              {videos.map(each => {
                const {
                  title,
                  id,
                  thumbNail,
                  name,
                  publishedAt,
                  viewCount,
                } = each
                const ago = formatDistanceToNow(new Date(publishedAt))
                const agoPublished = ago.split(' ')
                const Published = agoPublished[1]

                return (
                  <Link
                    to={`/videos/${id}`}
                    className="link"
                    onClick={changeIconColor}
                  >
                    <List key={id}>
                      <VideoImage src={thumbNail} alt="nail" />
                      <TextCon>
                        <Title bgTheme={theme}>{title}</Title>
                        <Name bgTheme={theme}>{name}</Name>
                        <StatusCon>
                          <Status bgTheme={theme}>{viewCount} views</Status>
                          <Dot bgTheme={theme}>.</Dot>
                          <Status bgTheme={theme}>{Published} years ago</Status>
                        </StatusCon>
                      </TextCon>
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

  renderFailureView = () => (
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
        return this.renderVideosView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.loading:
        return this.renderLoaderView()

      default:
        return null
    }
  }

  render() {
    const {videos} = this.state
    console.log(videos)
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
                      <FaHotjar className="font" />
                    </FontDiv>
                    <TrendHead bgTheme={theme}>Trending</TrendHead>
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
export default Trending
