import React from 'react';

const FormSwitch = (props) => {
    const btnClassNames = `onoffswitch-inner ${props.classNames.join(' ')}`;
    return (      
      <div className="onoffswitch" tabIndex="0">
        <input type="checkbox" id="onoffswitch" className="onoffswitch-checkbox" defaultChecked={props.defaultChecked} onChange={props.onSwitchToggle} />
        <label className="onoffswitch-label" htmlFor="onoffswitch">
          <span className={btnClassNames}></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    );
}

export default FormSwitch;