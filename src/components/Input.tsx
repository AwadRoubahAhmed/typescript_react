// 7. Input Events types;

type InputProps = {
  type: "text" | "number" | "email" | "passwords";
  placeholder: string;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ inputValue, handleChange }) => {
  return (
    <div className="bg-slate-600 mt-6">
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleChange}
        className="my-6 p-1 rounded"
      />
      <h2 className="pb-6 text-white">{inputValue}</h2>
    </div>
  );
};
