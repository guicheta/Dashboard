import React, { Component } from 'react';
import TimeInput from "react-widgets/TimeInput";
import "react-widgets/styles.css";


export default class Widget3 extends Component {
    state = {
        post: {}
    };


    //execution de l'horloge
    render() {
        return (
            <div className="Widget3">
                <TimeInput defaultValue={new Date()} style={{ width: "auto" }} />
            </div>
        );

    }
}