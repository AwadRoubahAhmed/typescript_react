// 8. Input Events types;

import { InputProps } from "./typescript/PropsTypes";

export const Input: React.FC<InputProps> = ({ inputValue, handleChange }) => {
  return (
    <div className="bg-slate-600 mt-6">
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs my-6 text-white"
      />
      <h2 className="pb-6 text-white">{inputValue}</h2>
    </div>
  );
};
