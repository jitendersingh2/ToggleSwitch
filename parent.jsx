// This is an example of using Form Switch in some dummy Parent component
import React from 'react';
import FormSwitch from './formSwitch.jsx';

class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        switchOn: false
      }
      
      this.onSwitchToggle = this.onSwitchToggle.bind(this);
    }
    // This is an onChange handler which will get pass to the onSwitchToggle props of FormSwitch component
    // You can manage the state of switch here as per your requirement 
    onSwitchToggle(e) {
      this.setState({
        switchOn: !this.state.switchOn
      })
    }
      
    render() {
      return (
        // Passing event handler to FormSwitch component
        <FormSwitch onSwitchToggle={this.onSwitchToggle} />
      );
    }
  }