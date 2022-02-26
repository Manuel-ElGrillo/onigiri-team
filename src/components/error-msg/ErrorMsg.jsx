import React from 'react';
import "../error-msg/ErrorMsg.css";

const ErrorMsg = ({msg}) => {
  return (
    <div className='error'>{msg}</div>
  )
}

export default ErrorMsg