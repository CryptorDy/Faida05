import React from 'react';

interface SliderProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  marks?: number[];
}

const Slider: React.FC<SliderProps> = ({
  icon,
  label,
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
  marks,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-[#4F5AE5]/80">{icon}</span>
          <label className="text-sm font-medium text-white/90">{label}</label>
        </div>
        <span className="text-sm font-semibold text-white">{displayValue}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full h-5 appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, white ${percentage}%, rgba(255,255,255,0.3) ${percentage}%)`,
          }}
        />
        <style>
          {`
            input[type=range] {
              -webkit-appearance: none;
              height: 5px;
              border-radius: 5px;
              background: rgba(255, 255, 255, 0.3);
            }
            
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 22px;
              height: 22px;
              border-radius: 50%;
              background: white;
              box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
              cursor: pointer;
            }
            
            input[type=range]::-moz-range-thumb {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              background: white;
              box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
              cursor: pointer;
              border: none;
            }
          `}
        </style>
      </div>
      {marks && (
        <div className="flex justify-between px-1 mt-1">
          {marks.map((mark) => (
            <div key={mark} className="flex flex-col items-center">
              <span className="text-xs text-white/60">{mark}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
