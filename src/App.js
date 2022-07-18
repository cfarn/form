import React from "react"

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

  render() {
    return (
      <div className="container col-6">
        <h1 className="text-center">Login</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <hr/>
      </div>
    )
  }
}



export default App;
