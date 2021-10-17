import { Component } from "react";

class LogOut extends Component {
  render() {
    localStorage.removeItem("logged");
    return <div>Click the "Log Out" link one more time, to Log Out!</div>;
  }
}

export default LogOut;
