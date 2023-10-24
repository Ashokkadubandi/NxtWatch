import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player/youtube'
import {AiOutlineDislike} from 'react-icons/ai'
import {BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import HeadControls from '../HeaderControls'
import NxtWatch from '../../Context/contextVideo'

import {
  VideoFlexCon,
  VideoCon,
  LargeVideoContainer,
  SmallVideoContainer,
  VideoDescription,
  StatusCon,
  DurationContainer,
  Status,
  LikesContainer,
  LikedButton,
  LoaderCon,
  ParaText,
  Dot,
} from './style'

const apiConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class VideoDetail extends Component {
  state = {
    videoDetail: {},
    apiStatus: apiConstants.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const object = data.video_details
      console.log(object)
      const updatedData = {
        channel: {
          name: object.channel.name,
          profileUrl: object.channel.profile_image_url,
        },
        description: object.description,
        id: object.id,
        publishedAt: object.published_at,
        thumbNail: object.thumbnail_url,
        title: object.title,
        videoUrl: object.video_url,
        viewCount: object.view_count,
      }
      console.log(updatedData)
      this.setState({videoDetail: updatedData, apiStatus: apiConstants.success})
    } else if (response.status === 401) {
      console.log('knskdvkl')
    }
  }

  renderVideoDetailLoadingView = () => (
    <LoaderCon>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderCon>
  )

  changeLike = () => {
    this.setState(pre => ({
      like: !pre.like,
      dislike: false,
    }))
  }

  changeDislike = () => {
    this.setState(pre => ({
      dislike: !pre.dislike,
      like: false,
    }))
  }

  renderVideoApiSuccessView = () => {
    const {videoDetail, like, dislike} = this.state
    const {videoUrl, title, publishedAt, viewCount, id} = videoDetail
    const DomUrl = videoUrl.replace('https', 'http')
    const ago = formatDistanceToNow(new Date(publishedAt))
    const agoPublished = ago.split(' ')
    const Published = agoPublished[1]

    return (
      <NxtWatch.Consumer>
        {value => {
          const {theme, addVideoDetails, removeVideoDetail, savedList} = value
          const isLike = like ? '#3b82f6' : ''
          const isDislike = dislike ? '#3b82f6' : ''
          const isSaved = savedList.find(each => each.id === id)
          const saveText = isSaved === undefined ? 'Save' : 'Saved'
          const saveColor = isSaved === undefined ? '' : '#3b82f6'
          const addVideos = () => {
            console.log(isSaved)
            if (isSaved !== undefined) {
              removeVideoDetail(videoDetail)
            } else {
              addVideoDetails(videoDetail)
            }
          }

          return (
            <VideoCon>
              <SmallVideoContainer>
                <ReactPlayer url={DomUrl} height="100%" width="100%" controls />
              </SmallVideoContainer>
              <LargeVideoContainer>
                <ReactPlayer url={DomUrl} height="100%" width="100%" controls />
              </LargeVideoContainer>
              <VideoDescription bgTheme={theme}>{title}</VideoDescription>
              <StatusCon>
                <DurationContainer>
                  <Status bgTheme={theme}>{viewCount} views</Status>
                  <Dot bgTheme={theme}>.</Dot>
                  <Status bgTheme={theme}>{Published} years ago</Status>
                </DurationContainer>
                <LikesContainer>
                  <LikedButton onClick={this.changeLike}>
                    <BiLike color={isLike} size="30px" />
                    <ParaText color={isLike}>Like</ParaText>
                  </LikedButton>
                  <LikedButton onClick={this.changeDislike}>
                    <AiOutlineDislike color={isDislike} size="30px" />
                    <ParaText color={isDislike}>Dislike</ParaText>
                  </LikedButton>
                  <LikedButton onClick={addVideos}>
                    <MdPlaylistAdd color={saveColor} size="30px" />
                    <ParaText color={saveColor}>{saveText}</ParaText>
                  </LikedButton>
                </LikesContainer>
              </StatusCon>
            </VideoCon>
          )
        }}
      </NxtWatch.Consumer>
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideoApiSuccessView()
      case apiConstants.loading:
        return this.renderVideoDetailLoadingView()
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
                {this.renderApiStatusView()}
              </VideoFlexCon>
            </>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default VideoDetail
