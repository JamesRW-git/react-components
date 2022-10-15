import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
    //Not required for a React component
    constructor(props) {
        super(props);

        //this is the only time we do direct assignment to this.state using '='
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
            },
            (err) => console.log(err)
        );
    }

    //React says we have to define render
    render() {
        return <div>Latitude: {this.state.lat} Longitude: {this.state.lon}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)