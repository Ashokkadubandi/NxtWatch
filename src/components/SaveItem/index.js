import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatch from '../../Context/contextVideo'

import {
  List,
  ImageThumb,
  TextContent,
  Title,
  StatusCon,
  Dot,
  Status,
  Name,
} from './style'

import './index.css'

const SaveItem = props => {
  const {eachItem} = props
  const {name} = eachItem.channel
  const {id, title, viewCount, thumbNail, publishedAt} = eachItem
  const ago = formatDistanceToNow(new Date(publishedAt))
  const agoPublished = ago.split(' ')
  const Published = agoPublished[1]

  console.log('skn')
  return (
    <NxtWatch.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link to={`/videos/${id}`} className="link">
            <List>
              <ImageThumb src={thumbNail} alt={title} />
              <TextContent>
                <Title bgTheme={theme}>{title}</Title>
                <Name bgTheme={theme}>{name}</Name>
                <StatusCon>
                  <Status bgTheme={theme}>{viewCount} views</Status>
                  <Dot>.</Dot>
                  <Status bgTheme={theme}>{Published} years ago</Status>
                </StatusCon>
              </TextContent>
            </List>
          </Link>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default SaveItem
