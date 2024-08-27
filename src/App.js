import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import NxtWatch from './Context/contextVideo'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetail from './components/VideoDetail'
import Saved from './components/Saved'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: false, themeActive: '', savedList: [], hide: false}

  modifyThemeColor = () => {
    this.setState(pre => ({
      theme: !pre.theme,
    }))
  }

  changeIconColor = icon => {
    this.setState({themeActive: icon})
  }

  addVideoDetail = data => {
    this.setState(pre => ({savedList: [...pre.savedList, data]}))
  }

  removeVideoDetail = data => {
    const {savedList} = this.state
    const filteredList = savedList.filter(each => each.id !== data.id)
    this.setState({savedList: filteredList})
  }

  changeBar = () => {
    this.setState(pre => ({hide: !pre.hide}))
  }

  render() {
    const {theme, themeActive, savedList, hide} = this.state
    console.log(savedList)

    return (
      <NxtWatch.Provider
        value={{
          theme,
          themeActive,
          savedList,
          hide,
          changeTheme: this.modifyThemeColor,
          changeIcon: this.changeIconColor,
          removeVideoDetail: this.removeVideoDetail,
          addVideoDetails: this.addVideoDetail,
          changeBar: this.changeBar,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetail} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </NxtWatch.Provider>
    )
  }
}

export default App
