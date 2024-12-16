// 7. Typing Styles as Props;

type ContainerProps = {
  backgroundColor?: string;
};

const Container: React.FC<ContainerProps> = ({ backgroundColor }) => {
  return (
    <div>
      <h2 style={{ backgroundColor: backgroundColor }}>
        Salut tous le monde !
      </h2>
    </div>
  );
};

export default Container;
