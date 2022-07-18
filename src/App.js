import React from "react"

// constantes
const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  // méthode email
  handleEmailChange = (e) => {
    // state email
    this.setState({ email: e.target.value })
    // state emailIsValid
    // if(regex.test(e.target.value) === true) {
    //   this.setState({ emailIsValid: true })
    // }else {
    //   this.setState({ emailIsValid: false })
    // }
    console.log(this.state.email)
  }

  // méthode password
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
    if(e.target.value.length > 5) {
      this.setState({ passwordIsValid: true })
    }else {
      this.setState({ passwordIsValid: false })
    }
    console.log(this.state.password)
  }

  // méthode checkbox
  // handleRememberMeChange = (e) => {
  //   this.setState({ rememberMe: })
  // }

  // méthode submit
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({ isSubmitted: true })
    }
  }

  render() {
    return (
      <div className="container col-6">
        <h1 className="text-center">Login</h1>
        {/* début du formulaire */}
        <form onSubmit={this.handleSubmit}>
          {/* div email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="input" 
              aria-describedby="emailHelp"
              placeholder="Enter email..." 
              onChange={this.handleEmailChange}
            />
          </div>
          {/* div password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              placeholder="Enter password..."
              onChange={this.handlePasswordChange}
            />
          </div>
          {/* div checkbox */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" onChange={this.handleRememberMeChange}/>
            <label class="form-check-label" htmlFor="check">Remember me</label>
          </div>
          {/* submit button */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> {/* /form */}
        <hr/>
      </div> // /container
    )
  }
}



export default App;
