import Header from '../Header'
import HeadControls from '../HeaderControls'
import NxtWatch from '../../Context/contextVideo'

import {VideoFlexCon, NotFoundCon, NotImg, NotHead, NotDesc} from './style'

const NotFound = () => (
  <>
    <Header />
    <NxtWatch.Consumer>
      {value => {
        const {theme} = value
        const notImg = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        return (
          <VideoFlexCon bgTheme={theme}>
            <HeadControls />
            <NotFoundCon>
              <NotImg src={notImg} alt="not found" />
              <NotHead bgTheme={theme}>Page Not Found</NotHead>
              <NotDesc bgTheme={theme}>
                We are sorry, the page you requested could not be found
              </NotDesc>
            </NotFoundCon>
          </VideoFlexCon>
        )
      }}
    </NxtWatch.Consumer>
  </>
)

export default NotFound
