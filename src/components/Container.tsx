// 7. Typing Styles as Props;

type ColorOption = "red" | "green" | "blue" | "yellow";

type ContainerProps = {
  backgroundColor?: ColorOption;
};

const Container: React.FC<ContainerProps> = ({ backgroundColor }) => {
  return (
    <div className="my-6 font-semibold ">
      <h2 style={{ backgroundColor: backgroundColor }} className="p-3">
        Salut tous le monde !
      </h2>
    </div>
  );
};

export default Container;
