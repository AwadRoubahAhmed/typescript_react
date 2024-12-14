// 5. Children Props ...

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <div className="bg-indigo-600 text-white">
      <h2>{children} </h2>
    </div>
  );
};
