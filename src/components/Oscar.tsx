// 6. Chidren Props ...

type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return (
    <div className="mt-6">
      <h2>{props.children}</h2>
    </div>
  );
};
