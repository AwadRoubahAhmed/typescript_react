// 6. Event Props types;

type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default Button;
