import React from 'react'

function Buttons({color,bgColor,text,borderRadius, size}) {
  return (
    <button type='button' style={{ backgroundColor: bgColor, color: color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Buttons