// 2. Typing an Object Props;

type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export const Person = ({ name }: PersonProps) => {
  return (
    <div className="bg-teal-200 mb-6">
      <h3 className="text-center">
        Hello {name.firstName} {name.lastName} welcom to our channel !
      </h3>
    </div>
  );
};
