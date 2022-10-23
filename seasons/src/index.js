import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
    //Not required for a React component
    constructor(props) {

        super(props);

        //this is the only time we do direct assignment to this.state using '='
        this.state = {lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({ errorMessage: err.message})
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was just updated - it re-rendered!');
    }

    //React says we have to define render
    render() {
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            }
            if(!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: {this.state.lat}</div>
            }
            return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)