import {Component} from React;

export default class ToggleSwitch extends Component {
    constructor(props) {
      super(props);
    }
      
    render() {
      return (      
        <div className="onoffswitch">
          <input type="checkbox" id="onoffswitch" className="onoffswitch-checkbox" />
          <label className="onoffswitch-label" htmlFor="onoffswitch">
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
          </label>
        </div>
      );
    }
}
