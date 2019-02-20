import React from "react";
import "./styles.css";

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  handleClickHeader = () => {
    console.log("Yoo");
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };
  handleClickList = (e, value) => {
    this.setState({
      toggle: !this.state.toggle
    });
    console.log("Value", e.target.value, e);
  };
  render() {
    const { toggle } = this.state;
    const { data } = this.props;
    const listValues = data.map(item => {
      const { title, id } = item;
      return (
        <li
          className="sblist"
          key={id}
          value={title}
          onClick={e => this.handleClickList(e)}
        >
          {title}
        </li>
      );
    });
    return (
      <div className="wrapper">
        <div className="headerWrapper" onClick={this.handleClickHeader}>
          <div className="header">select box</div>
        </div>
        {toggle && <ul className="listWrapper">{listValues}</ul>}
      </div>
    );
  }
}
