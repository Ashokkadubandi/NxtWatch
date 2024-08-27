import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatch from '../../Context/contextVideo'
import Header from '../Header'
import HeadControls from '../HeaderControls'
import SaveItem from '../SaveItem'

import {
  VideoFlexCon,
  VideoCon,
  SavedHead,
  FontDiv,
  TrendHead,
  Unorder,
  NoData,
  NoImage,
  NoPara,
  NoText,
} from './style'

const Saved = () => {
  const renderNoVideos = theme => (
    <NoData>
      <NoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoText bgTheme={theme}>No saved videos found</NoText>
      <NoPara bgTheme={theme}>
        You can save your videos while watching them
      </NoPara>
    </NoData>
  )

  return (
    <NxtWatch.Consumer>
      {value => {
        const {savedList, theme} = value
        const saveLength = savedList.length
        console.log(savedList)

        return (
          <>
            <Header />
            <VideoFlexCon bgTheme={theme} data-testid="savedVideos">
              <HeadControls />
              {saveLength === 0 ? (
                renderNoVideos(theme)
              ) : (
                <VideoCon>
                  <SavedHead bgTheme={theme}>
                    <FontDiv bgTheme={theme}>
                      <MdPlaylistAdd className="font" />
                    </FontDiv>
                    <TrendHead bgTheme={theme}>Saved Videos</TrendHead>
                  </SavedHead>
                  <Unorder>
                    {savedList.map(each => (
                      <SaveItem eachItem={each} key={each.id} />
                    ))}
                  </Unorder>
                </VideoCon>
              )}
            </VideoFlexCon>
          </>
        )
      }}
    </NxtWatch.Consumer>
  )
}

export default Saved
