import React from 'react'
import Hearts from './Hearts'
import MinMaxButton from './MinMaxButton'


export default class Hud extends React.Component {

  state = {
    hearts: 3,
    maxHearts: 10,
  };

  render() {
    return (
      <div className={"Hud"}>
        <Hearts hearts={this.state.hearts} maxHearts={this.state.maxHearts}/>       
        <aside className="Sidebar">
          <MinMaxButton
            value={this.state.hearts}
            maxValue={this.state.maxHearts}
            increment={0.5}
            onNewValue={(newValue) => {
              this.setState({
                hearts: newValue
              })
            }}
          />
          <MinMaxButton
            value={this.state.maxHearts}
            maxValue={20}
            increment={1}
            onNewValue={(newValue) => {
              this.setState({
                maxHearts: newValue
              })
            }}
          />
        </aside>
      </div>
    );
  }
}