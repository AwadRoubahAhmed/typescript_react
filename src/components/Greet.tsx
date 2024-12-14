// 1. How you type the Props for React Component => Primitive Types;

//Custom types,
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
export default function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
  return (
    <div className="bg-zinc-400 ">
      <h2 className="text-center font-semibold my-6">
        {isLoggedIn
          ? `Welcom ${name} ! You have ${messageCount} unread messages !`
          : "Welcom Guest ! Please Log In ..."}
      </h2>
    </div>
  );
}
