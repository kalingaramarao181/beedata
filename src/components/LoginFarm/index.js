import { Component } from "react";
import "./index.css"
import axios from "axios"
import Cookies from "js-cookie";

class LoginFarm extends Component{

    state = {
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
        loginStatus: "",
      }

      onSubmitForm =async event => {
        const {history} = this.props
        event.preventDefault()
        const {username, password, loginStatus} = this.state
        if (loginStatus === "ADMIN"){
          axios.post("http://74.208.28.169:5000/login", {username, password})
          .then(res => {
          if (res.data){
            history.replace("/hrr")
            Cookies.set("jwt_token", `${username}`, { expires: 1 });
            Cookies.set("login_status", `${loginStatus}`, { expires: 30 })
          }else{
            this.setState({errorMsg: "User Not Found Please Enter valid Credentials"})
            alert("User Not Found Please Enter valid Credentials")
          }
          }).catch(err => this.setState({errorMsg: err}))
          this.setState({username: "", password: ""})
        }else if (loginStatus === "HR"){
          axios.post("http://74.208.28.169:5000/hrlogin", {username, password})
          .then(res => {
            if (res.data){
                history.replace("/admin")
                Cookies.set("jwt_token", `${username}`, { expires: 30 });
                Cookies.set("login_status", `${loginStatus}`, { expires: 30 })
            }else{
                alert("Please provide valid details")
            }
            console.log(res)
            })
            .catch(err => alert(`${err}`))
        }else if(loginStatus === "EMPLOYE"){
          axios.post("http://74.208.28.169:5000/employelogin", {username, password})
          .then(res => {
            if (res.data){
                history.replace("/employedb")
                Cookies.set("jwt_token", `${username}`, { expires: 30 });
                Cookies.set("login_status", `${loginStatus}`, { expires: 30 })
            }else{
                alert("Please provide valid details")
            }
            console.log(res)
            })
            .catch(err => alert(`${err}`))
        }
        
      }

      onEnterUsername = event => {
        this.setState({username: event.target.value})
      }
    
      onChangePassword = event => {
        this.setState({password: event.target.value})
      }

      onChangeLoginStatus = event => {
        this.setState({loginStatus: event.target.value})
      }

    renderUsername = () => {
        const {username} = this.state
        return (
          <>
            <label className="label" htmlFor="userName">
              USERNAME
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="user-input"
              value={username}
              onChange={this.onEnterUsername}
            />
          </>
        )
      }

      renderPassword = () => {
        const {password} = this.state
        return (
          <>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="user-input"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
          </>
        )
      }

    render(){
      const {errorMsg, loginStatus} = this.state
        return(
            <div className="ssh-app-container">
              <select className="login-selection" onChange={this.onChangeLoginStatus}>
                <option value="ADMIN">Admin</option>
                <option value="HR">HR</option>
                <option value="EMPLOYE">Employe</option>
              </select>
                <div className="ssh-card-container">
                <img
                    src="img\applogo.png"
                    alt="website logo"
                    className="website-logo"
                />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <button className="login-button" type="submit">
             {loginStatus} Login
            </button>
          </form>
          <p className="err-msg">{errorMsg}</p>
        </div>
      </div>
        )
    }
}

export default LoginFarm