import React from 'react';

const FormSwitch = (props) => {
    return (      
      <div className="onoffswitch" tabIndex="0">
        <input type="checkbox" id="onoffswitch" className="onoffswitch-checkbox" onChange={props.onSwitchToggle} />
        <label className="onoffswitch-label" htmlFor="onoffswitch">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    );
}

export default FormSwitch;