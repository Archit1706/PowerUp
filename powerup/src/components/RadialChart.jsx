import React from 'react'

const RadialChart = (props) => {
  return (
    <>
      <div className={`radial-progress bg-gray-200 ${props.color}`} style={{ "--value":  props.value  }} >
        <p className="text-center text-black font-bold">{ props.value } {"%"}</p>
        </div>
    </>
  )
}

export default RadialChart