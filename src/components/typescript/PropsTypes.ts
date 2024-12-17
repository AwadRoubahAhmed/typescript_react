// Typing All Props ;

// 1. How you type the Props for React Component => Primitive Types;
//Custom types,
export type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
///////////////////////////////////////////////////////////////////////
// 2. Typing an Object Props;
export type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};
///////////////////////////////////////////////////////////////////////
// 3. Typing an Array Props;
export type PersonsListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
///////////////////////////////////////////////////////////////////////
// 4. Advanced Props => union, optional type ...
export type StatusProps = {
  status?: "loading" | "complete" | "error";
};
///////////////////////////////////////////////////////////////////////
// 5. Children Props ...
export type HeadingProps = {
  children: string;
};
///////////////////////////////////////////////////////////////////////
// 6. Chidren Props ...
export type OscarProps = {
  children: React.ReactNode;
};
///////////////////////////////////////////////////////////////////////
// 7. Event Props types;
export type ButtonProps = {
  handleClick: () => void;
};
///////////////////////////////////////////////////////////////////////
// 8. Input Events types;
export type InputProps = {
  type?: "text" | "number" | "email" | "passwords";
  placeholder: string;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
///////////////////////////////////////////////////////////////////////
// 9. Typing Styles as Props;
export type ColorOption = "red" | "green" | "blue" | "yellow";

export type ContainerProps = {
  backgroundColor?: ColorOption;
};
