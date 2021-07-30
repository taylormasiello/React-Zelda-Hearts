import React from 'react'
// import Hearts from './Hearts'
import MinMaxButton from './MinMaxButton'
//import {Heart} from "./icons";

export default class Hud extends React.Component {

  state = {
    hearts: 3,
    maxHearts: 5,
  };

  render() {
    return (
      <div className={"Hud"}>
      I AM THE HUD          
        <aside className="Sidebar">
          <MinMaxButton
            value={this.state.hearts}
            maxValue={this.state.maxHearts}
            increment={0.5}
            // onNewValue={(newValue) => {
              //TODO
            // }}
          />
        </aside>
      </div>
    );
  }
}