import React from 'react'
import "./index.css";

const Button = (props) => {

  const { text } = props;

  return (
    <div className='button'>
      <button className='btn'>
        {text}

        <svg style={{marginLeft: "5px"}} xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      </button>
    </div>
  )
}

export default Button