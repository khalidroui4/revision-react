import { Component } from "react";
import Button from "../components/Button";

export default class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("count changed", "to", this.state.count);
    }
  }
  componentWillUnmount() {
    console.log("count class page is unmounted");
  }
  Add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  Reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <h1>Hello To CountPageClass</h1>
        <span style={{ display: "flex" }}>
          <p>you clicked this button: {this.state.count} times</p>
          <Button onClick={this.Add}>+</Button>
          <Button onClick={this.Minus}>-</Button>
          <Button onClick={this.Reset}>reset</Button>
        </span>
      </div>
    );
  }
}
