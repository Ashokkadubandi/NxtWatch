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
import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: false, themeActive: '', savedList: []}

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

  render() {
    const {theme, themeActive, savedList} = this.state
    console.log(savedList)

    return (
      <NxtWatch.Provider
        value={{
          theme,
          themeActive,
          savedList,
          changeTheme: this.modifyThemeColor,
          changeIcon: this.changeIconColor,
          removeVideoDetail: this.removeVideoDetail,
          addVideoDetails: this.addVideoDetail,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetail} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
        </Switch>
      </NxtWatch.Provider>
    )
  }
}

export default App
