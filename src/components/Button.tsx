// 7. Event Props types;

import { ButtonProps } from "./typescript/PropsTypes";

export const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <div className="bg-emerald-500 my-6">
      <button onClick={handleClick} className="btn btn-primary text-lg my-6">
        Click Me
      </button>
    </div>
  );
};
