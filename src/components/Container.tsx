// 9. Typing Styles as Props;

import { ContainerProps } from "./typescript/PropsTypes";

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
