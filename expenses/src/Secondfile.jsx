import React from 'react'

function Secondfile() {
     let isVisible = false;
        isVisible = isVisible ? "hide": "show";
  return (
    <div>
       <button className={isVisible}>Click me</button>
    </div>
  )
}

export default Secondfile
