class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: false
    }
    
    this._handleButtonToggle = this._handleButtonToggle.bind(this);
  }
  
  _handleButtonToggle(e) {
    this.setState({
      switchOn: !this.state.switchOn
    })
  }
    
  render() {
    return (      
      <div className="toggleswitch">
        <input type="checkbox" id="onoffswitch" className="toggleswitch-checkbox" onChange={this._handleButtonToggle} />
        <label className="toggleswitch-label" htmlFor="onoffswitch">
          <span className="toggleswitch-inner"></span>
          <span className="toggleswitch-switch"></span>
        </label>
      </div>
    );
  }
}
