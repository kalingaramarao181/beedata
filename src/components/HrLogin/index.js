import React , {Component} from 'react'
import './index.css';
import axios from 'axios';
import Cookies from "js-cookie"

class HrLogin extends Component {
    state = {email:"", password: ""}

    onChangeEmail = event => (this.setState({email: event.target.value}))
    onChangePassword = event => (this.setState({password: event.target.value}))

    onSubmitLoginFarm = (event) => {
        const {email, password} = this.state
        const {history} = this.props
        event.preventDefault()

        axios.post("http://74.208.28.169:5000/hrlogin", {email, password})
        .then(res => {
            if (res.data){
                history.replace("/admin")
                Cookies.set("jwt_token", `${email}`, { expires: 30 });
            }else{
                alert("Please provide valid details")
            }
            console.log(res)
        })
        .catch(err => alert(`${err}`))
            

        this.setState({email: "", password: ""})
    }

render() {
    const {email, password} = this.state
    return (
        <>
        <form onSubmit={this.onSubmitLoginFarm} className='Hl-card1 d-flex flex-row'>
            <div className='Ln-card21'> 
                <h1 className='Ln-head1' style={{paddingLeft:"40px"}}>HR LOGIN</h1>
                <label>Email</label>
                <input value={email} type="text" onChange={this.onChangeEmail} className='Ln-inputbox' placeholder='Enter Your Email'/>
                <label>Password</label>
                <input value={password} type="password" onChange={this.onChangePassword} className='Ln-inputbox' placeholder='Enter Your Password'/>
                <button type='submit' className='hr-button1'>LOGIN</button>
        </div>
            <img alt="image1" className='Ln-img1' src="img\hr-management.png"/>
        </form>
        </>
    )
}
}

export default HrLogin