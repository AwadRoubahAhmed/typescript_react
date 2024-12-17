// 3. Typing an Array Props;

import { PersonsListProps } from "./typescript/PropsTypes";

export const PersonList = (props: PersonsListProps) => {
  return (
    <div className="bg-cyan-300 mb-6">
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
