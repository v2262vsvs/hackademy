import { Component } from "react";

class Reload extends Component {
  render() {
    const refreshPage = () => {
      window.location.reload();
    };
    return <div>{refreshPage}</div>;
  }
}

export default Reload;
