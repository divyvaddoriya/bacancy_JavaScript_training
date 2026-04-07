import React from 'react'

const ErrorElement = ({message} : {message : string}) => {
  return (
    <div>
        <div style={{color: "red"}}>
        {message}
        </div>
    </div>
  )
}

export default ErrorElement