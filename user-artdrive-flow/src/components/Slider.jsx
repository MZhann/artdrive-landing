import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="absolute top-[450px] left-[125px] flex flex-col items-center space-y-2">
      <div className="relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-black bg-gray-200 px-2 py-1 rounded-lg">
          {value}%
        </div>
        
        <div className="absolute left-0 -top-6 text-sm text-black">Human</div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="absolute right-0 -top-6 text-sm text-black">AI</div>
      </div>
    </div>
  );
};

export default Slider;
