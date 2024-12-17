// 6. Chidren Props ...

import { OscarProps } from "./typescript/PropsTypes";

export const Oscar = (props: OscarProps) => {
  return (
    <div className="mt-6">
      <h2>{props.children}</h2>
    </div>
  );
};
