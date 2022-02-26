import React from 'react'
import "../success/Success.css";

const Success = ({successMsg}) => {
  return (
    <div className='success'>{successMsg}</div>
  )
}

export default Success