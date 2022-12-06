import React, { Component } from "react";
import Forecast from "../containers/Forecast";


export default class Widget4 extends Component {
    state = {
        city: "Paris"
    };

    handleChange = event => {
        this.setState({ city: event.target.value });
    };

    render() {
        const { city } = this.state;
        return (
            <div className="Widget4">
                <h2> Today's weather</h2>

                <input
                    type="text"
                    name="Ville"
                    value={city}
                    onChange={this.handleChange}
                />

                <Forecast city={city} />
            </div>
        );
    }
}

