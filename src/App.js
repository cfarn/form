import React from "react"

// constantes
const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  // méthode firstName
  handlefirstNameChange = (e) => {
    // state firstName
    this.setState({ firstName: e.target.value }, () => {
      console.log(this.state.firstName)
    })
  }

  // méthode lastName
  handlelastNameChange = (e) => {
    // state lastName
    this.setState({ lastName: e.target.value }, () => {
      console.log(this.state.lastName)
    })
  }



  // méthode email
  handleEmailChange = (e) => {
    // state email
    this.setState({ email: e.target.value }, () => {
      console.log(this.state.email)
    })
    // state emailIsValid
    if(regex.test(e.target.value)) {
      this.setState({ emailIsValid: true }, () => {
      console.log(this.state.emailIsValid)
      })
    }else {
      this.setState({ emailIsValid: false })
    }
    
  }

  // méthode password
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value }, () => {
      console.log(this.state.password)
    })
    if(e.target.value.length > 5) {
      this.setState({ passwordIsValid: true }, () => {
        console.log(this.state.passwordIsValid)
      })
    }else {
      this.setState({ passwordIsValid: false }, () => {
        console.log(this.state.passwordIsValid)
      })
    }
  }

  // méthode checkbox
  handleRememberMeChange = (e) => {
    if(this.state.rememberMe) {
      this.setState({ rememberMe: false})
    }else {
      this.setState({ rememberMe: true})
    }
    
  }

  // méthode submit
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({ isSubmitted: true })
    }else {
      this.setState({ isSubmitted: false })
    }
  }

  render() {
    
    return (
      <div className="container col-6">
        <h1 className="text-center">Login</h1>
        {
          // condition ternaire affichage du message ou du form
          this.state.isSubmitted ? 
          <div className="bg-success text-white">
            <p className="text-center">Form submitted</p>
            <p className="text-center">{`${this.state.firstName} ${this.state.lastName}`}</p>
          </div> : 
          // début du formulaire
          <form onSubmit={this.handleSubmit}>
            {/* div firstName */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">FirstName</label>
              <input 
                type="text" 
                className="form-control" 
                id="input" 
                placeholder="Enter firstName..." 
                onChange={this.handlefirstNameChange}
              />
            </div>
            {/* div lastName */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">lastName</label>
              <input 
                type="text" 
                className="form-control" 
                id="input" 
                placeholder="Enter lastName..." 
                onChange={this.handlelastNameChange}
              />
            </div>
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
              <label className="form-check-label" htmlFor="check">Remember me</label>
            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form> 
        }
        
        <hr/>
      </div> // /container
    )
  }
}



export default App;
