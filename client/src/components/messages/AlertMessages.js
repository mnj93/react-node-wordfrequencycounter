import React from 'react';
import PropTypes from 'prop-types';

const AlertMessage = (props)=>
(
    <div className="container">
    <div className={props.type}>
     <strong>{props.header}</strong> {props.text}
    </div>
    </div>
);


AlertMessage.PropTypes = {
    type : PropTypes.string.isRequired,
    header:PropTypes.string,
    text:PropTypes.string.isRequired
}
export default AlertMessage;