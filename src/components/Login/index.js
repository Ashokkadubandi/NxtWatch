import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginCon,
  FormCard,
  ImageLogo,
  Form,
  FormLabel,
  FormInput,
  CheckBoxCon,
  CheckPara,
  SubmitBtn,
  CheckInp,
  Error,
} from './style'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', check: false}

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserAccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  showErrorMsg = msg => {
    this.setState({errorMsg: msg})
  }

  submitFormDetails = async event => {
    event.preventDefault()
    console.log('Event triggered')
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderUserAccess(data.jwt_token)
    } else {
      this.showErrorMsg(data.error_msg)
    }
  }

  clickCheckbox = () => {
    this.setState(pre => ({check: !pre.check}))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, errorMsg, check} = this.state
    const passwordType = check ? 'text' : 'password'
    console.log(passwordType)

    return (
      <LoginCon>
        <FormCard>
          <ImageLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Form onSubmit={this.submitFormDetails}>
            <FormLabel htmlFor="input1">USERNAME</FormLabel>
            <FormInput
              id="input1"
              onChange={this.onchangeUsername}
              value={username}
              type="text"
            />
            <FormLabel htmlFor="input2">PASSWORD</FormLabel>
            <FormInput
              id="input2"
              onChange={this.onChangeUserPassword}
              value={password}
              type={passwordType}
            />
            <CheckBoxCon>
              <CheckInp
                type="checkbox"
                id="check"
                onClick={this.clickCheckbox}
                checked={check}
              />
              <CheckPara htmlFor="check">Show Password</CheckPara>
            </CheckBoxCon>
            <SubmitBtn type="submit">Login</SubmitBtn>
            {errorMsg !== '' && <Error>{errorMsg}</Error>}
          </Form>
        </FormCard>
      </LoginCon>
    )
  }
}
export default Login
