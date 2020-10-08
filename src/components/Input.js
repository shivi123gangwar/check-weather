import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";
import "../css/style.css";
class Input extends React.Component {
  state = { city: "" };
  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };
  OnFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({ city: "" });
  };
  render() {
    return (
      <form onSubmit={this.OnFormSubmit}>
        <div className="d-flex justify-content-center">
          <div className="form-group">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.city}
              className="form-control search-box"
            />
          </div>
          <button
            type="submit"
            onSubmit={this.OnFormSubmit}
            className="btn btn-success btn-submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(Input);
