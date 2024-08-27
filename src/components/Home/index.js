import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import NxtWatch from '../../Context/contextVideo'
import Header from '../Header'
import Videos from '../Videos'
import HeadControl from '../HeaderControls'

import {
  VideoFlexCon,
  VideoCon,
  BannerContainer,
  BannerContent,
  BanLogo,
  PremiumAlert,
  BanButton,
  CloseBtn,
  ApiContent,
  SearchCon,
  SearchInp,
  SearchBtn,
  ContentFlow,
  OrderVideosCon,
  NoHead,
  NoPara,
  NoData,
  Retry,
  NoImage,
} from './style'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    Banner: true,
    videos: [],
    apiStatus: apiConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.renderApiCall()
  }

  renderApiCall = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileUrl: each.channel.profile_image_url,
        },
        id: each.id,
        thumbNail: each.thumbnail_url,
        publishedAt: each.published_at,
        title: each.title,
        viewCount: each.view_count,
      }))
      //   console.log(updatedData)
      this.setState({videos: updatedData, apiStatus: apiConstants.success})
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  closeBanner = () => {
    this.setState({Banner: false})
  }

  NoDataFound = () => (
    <NxtWatch.Consumer>
      {value => {
        const {theme} = value

        return (
          <NoData>
            <NoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoHead bgTheme={theme}>No Search results found</NoHead>
            <NoPara bgTheme={theme}>
              Try different key words or remove search filter
            </NoPara>
            <Retry onClick={this.renderApiCall}>Retry</Retry>
          </NoData>
        )
      }}
    </NxtWatch.Consumer>
  )

  renderFailureView = () => (
    <NxtWatch.Consumer>
      {value => {
        const {theme} = value
        const ErrorImage = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <NoData>
            <NoImage src={ErrorImage} alt="failure view" />
            <NoHead bgTheme={theme}>Oops! Something Went Wrong</NoHead>
            <NoPara bgTheme={theme}>
              We are having some trouble to complete your request. Please try
              again
            </NoPara>
            <Retry onClick={this.renderApiCall}>Retry</Retry>
          </NoData>
        )
      }}
    </NxtWatch.Consumer>
  )

  renderVideosData = () => {
    const {videos} = this.state
    const videoLength = videos.length > 0
    return videoLength ? (
      <OrderVideosCon>
        {videos.map(each => (
          <Videos eachItem={each} key={each.id} />
        ))}
      </OrderVideosCon>
    ) : (
      this.NoDataFound()
    )
  }

  renderBanner = () => {
    const {Banner} = this.state

    return (
      <>
        {Banner === true && (
          <BannerContainer data-testid="banner">
            <BannerContent>
              <BanLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <PremiumAlert>
                Buy Nxt Watch Premium Prepaid plans with UPI
              </PremiumAlert>
              <BanButton type="button">GET IT NOW</BanButton>
            </BannerContent>
            <CloseBtn
              type="button"
              onClick={this.closeBanner}
              data-testid="close"
            >
              <AiOutlineClose />
            </CloseBtn>
          </BannerContainer>
        )}
      </>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideosData()
      case apiConstants.loading:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  changeVideo = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <VideoFlexCon bgTheme={theme} data-testid="home">
                <HeadControl />
                <VideoCon>
                  {this.renderBanner()}
                  <ApiContent>
                    <SearchCon>
                      <SearchInp
                        type="search"
                        placeholder="Search"
                        onChange={this.changeVideo}
                      />
                      <SearchBtn
                        type="button"
                        onClick={this.renderApiCall}
                        data-testid="searchButton"
                      >
                        <BsSearch />
                      </SearchBtn>
                    </SearchCon>
                    <ContentFlow>{this.renderApiStatus()}</ContentFlow>
                  </ApiContent>
                </VideoCon>
              </VideoFlexCon>
            </>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}

export default Home
