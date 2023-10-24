import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatch from '../../Context/contextVideo'

import {
  VideoList,
  Image,
  VideoContent,
  AccountLogo,
  VideoDescCon,
  VideoDescription,
  Title,
  StatusDuration,
  Status,
  Dot,
} from './style'

import './index.css'

const Videos = props => {
  const {eachItem} = props
  const {profileUrl, name} = eachItem.channel
  const {thumbNail, title, viewCount, publishedAt, id} = eachItem
  const ago = formatDistanceToNow(new Date(publishedAt))
  const agoPublished = ago.split(' ')
  const Published = agoPublished[1]

  return (
    <NxtWatch.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoList>
              <Image src={thumbNail} alt="vid" />
              <VideoContent>
                <AccountLogo src={profileUrl} alt="pro" />
                <VideoDescCon>
                  <VideoDescription bgTheme={theme}>{title}</VideoDescription>
                  <Title>{name}</Title>
                  <StatusDuration>
                    <Status>{viewCount} views</Status>
                    <Dot>.</Dot>
                    <Status> {Published} years ago</Status>
                  </StatusDuration>
                </VideoDescCon>
              </VideoContent>
            </VideoList>
          </Link>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default Videos
