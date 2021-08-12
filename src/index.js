import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import SeasonDisplay from './components/SeasonDisplay'

class ClimateComponent extends React.Component {
  state = { lat: null, long: null, err: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat:Math.round(position.coords.latitude)
        });
      },
      (error) => {
        console.log(error);
        this.setState({ err: "Access denied" });
      }
    );
  }

  render() {
      return (
        <SeasonDisplay lat={this.state.lat} err={this.state.err}/>
      );
    }
    }



/*const Component = () => { window.navigator.geolocation.getCurrentPosition(
    (position) => {
       console.log(position);
    },
    (error) => {
       console.log(error);
    }
  );
  return <h1>hello dude</h1>;
};*/

ReactDOM.render(<ClimateComponent />, document.querySelector("#root"));
