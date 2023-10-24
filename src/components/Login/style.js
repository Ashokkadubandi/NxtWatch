import styled from 'styled-components'

export const LoginCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-width: 450px;
`
export const ImageLogo = styled.img`
  height: 35px;
  width: 100px;
  align-self: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`
export const FormLabel = styled.label`
  font-family: Roboto;
  font-size: 16px;
  color: #323f4b;
  font-weight: bold;
  padding-top: 8px;
`
export const FormInput = styled.input`
  width: 100%;
  border: 1px solid #323f4b;
  height: 36px;
  border-radius: 8px;
  margin-top: 8px;
  padding-left: 10px;
  font-family: Roboto;
`
export const CheckBoxCon = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const CheckInp = styled.input`
  height: 20px;
  width: 20px;
`

export const CheckPara = styled.label`
  font-family: Roboto;
  font-size: 20px;
  color: #323f4b;
  font-weight: 500;
`
export const SubmitBtn = styled.button`
  background-color: #49a9f2;
  border-width: 0px;
  height: 35px;
  width: 100%;
  font-family: Roboto;
  border-radius: 8px;
  color: #ffffff;
`
export const Error = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: red;
  font-weight: 500;
`
