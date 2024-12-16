// 6. Event Props types;

type ButtonProps = {
  handleClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return (
    <div className="bg-emerald-500 my-6">
      <button
        onClick={handleClick}
        className="text-white p-1 my-6 border bg-slate-800 hover:bg-slate-700 rounded"
      >
        Click Me
      </button>
    </div>
  );
};
