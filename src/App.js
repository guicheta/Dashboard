import React from "react";
import "./App.css";
import HEADER from '../src/components/header';
import WIDGET1 from '../src/components/widget1';
import WIDGET2 from '../src/components/widget2';
import WIDGET3 from '../src/components/widget3';
import WIDGET4 from '../src/components/widget4';
import WIDGET5 from '../src/components/widget5';
import WIDGET6 from '../src/components/widget6';


export default class App extends React.Component {

  state = {
    post: {}
  };

  // page principale séparée en 3
  render() {
    return (
      <div className="App">
        <div className="top">

          <HEADER />

        </div>

        <div className="grp1">

          <WIDGET1 />
          <WIDGET2 />
          <WIDGET3 />

        </div>
        <div className="grp2">

          <WIDGET4 />
          <WIDGET5 />
          <WIDGET6 />

        </div>
      </div>

    );

  }
}