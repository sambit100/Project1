import { useState } from "react";
import React from 'react'

const Slider = () => {
    const [value, setValue] = useState(10);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" flex flex-row justify-around">
   
    <input
      id="slider"
      type="range"
      min="5"
      max="30"
      step="1"
      value={value}
      onChange={handleChange}
      className="w-45  mt-2"
    />
 {"             "}
<label htmlFor="slider" className="text-base">
     {value} {"%"}
    </label>
  </div>
  )
}

export default Slider