import React from 'react'

const ProgressBar = (props) => {
  return (
      <>
          <progress className="progress w-56" value={props.value} max="100"></progress>
      </>
  );
}

export default ProgressBar