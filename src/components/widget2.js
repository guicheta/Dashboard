import React, { Component } from 'react';
import Calendar from "react-widgets/Calendar";
import "react-widgets/styles.css";


export default class Widget2 extends Component {
    state = {
        post: {}
    };


    //execution du calendrier
    render() {
        return (
            <div className="Widget2">
                <Calendar defaultValue={new Date()} />
            </div>
        );

    }
}