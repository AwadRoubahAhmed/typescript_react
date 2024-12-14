// 3. Typing an Array Props;

type PersonsListProps = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};
export const PersonList = ({ names }: PersonsListProps) => {
  return (
    <div className="bg-cyan-300 mb-6">
      {names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
